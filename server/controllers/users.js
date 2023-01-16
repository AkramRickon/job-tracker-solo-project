const User = require('../models/users');
const Application=require('../models/application');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        return res
            .status(409)
            .send({ error: '409', message: 'User already exists',success:false });
    }
    try {
        let { fullName, email, password, phoneNumber } = req.body;
        password = await bcrypt.hash(password, 10);

        if (fullName && email && password && phoneNumber) {
            const result = await User.create({ fullName, email, password, phoneNumber });
            // console.log(result);
            res.status(200);
            res.send(result);
        }
        else {
            res.status(400);
            res.json({ "error": "Provide all the required values" })
        }
    }
    catch (error) {
        // console.log(error);
        res.send({ error: '409', message: 'Authentication Error',success:false });
        res.send(500);
    }
}

const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        // console.log(user);
        if (user) {
            const isValidPassword = await bcrypt.compare(password, user.password);
            // const result = await Application.find({ user: user.email });
            
            if (isValidPassword) {


                // Generate JWT token
                const token = jwt.sign(
                    { _id: user._id },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '7d'
                    });

                res.status(200);
                // res.setHeader("Authorization", 'Bearer ' + token);
                res.json({
                    "success": true,
                    "access_token": 'Bearer ' + token,
                    "expiresIn": "7d",
                    "email": user.email,
                    // "data" : result,
                    "message": "Login Successful",
                })
            }
            else {
                res.status(401).json({ "message": "Password did not match","suceess":false});
            }
        }
        else {
            res.status(401).json({ "message": "User Not Found","suceess":false});
        }
    }
    catch (error) {
        console.log(error);
        res.json({ "message": "Authentication failed","suceess":false})
        res.send(401);
    }
}

module.exports = { createUser, getUser }
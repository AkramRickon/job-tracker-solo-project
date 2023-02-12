
const jwt = require('jsonwebtoken');
const User = require('../models/users');

const authMiddleware = async (req, res, next) => {

    const { authorization } = req.headers;
    if (!authorization) {
        res.sendStatus(403);
        res.send('You are not logged in!');

    } else {
        const token = authorization.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const { _id } = decoded;
            const user = await User.findOne({ _id });
            if (!user) {
                res.sendStatus(401);
                res.send('You are not logged in!');

            } else {
                req.user = user;
                next();
            }
        }
        catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                res.sendStatus(401);
                res.json({ "error": "Access token has expired" });
            }
            else {
                res.status(500);
            }
        }
    }
}

module.exports = { authMiddleware };
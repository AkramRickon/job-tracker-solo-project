const Application = require('../models/application');

const getApplications = async (req, res) => {
    try {
        res.send(await Application.find());
        res.status(200);
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

const getApplicationById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Application.findById(id);
        res.send(result);
        res.status(200);
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

const getUserApplication = async (req, res) => {
    try {
        const { email } = req.body;
        // console.log(email);
        const result = await Application.find({ user: email });
        res.send(result);
        res.status(200);
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

const createApplication = async (req, res) => {
    try {

        const { companyName, position, salary, location, jobNature, employmentType, details, status, jobLink, user } = req.body;

        //checking if all the required data are sent from client side
        if (companyName && position && salary && location && jobNature && employmentType && details && status && jobLink, user) {

            const result = await Application.create({ companyName, position, salary, location, jobNature, employmentType, details, status, jobLink, user });
            res.send(result);
            res.status(201);
        }
        else {
            res.status(400);
            res.json({ "error": "Provide all the required values" })
        }
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

const deleteApplication = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Application.findByIdAndDelete(id);
        res.send(result);
        res.status(200);
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

const updateApplication = async (req, res) => {
    try {
        const updatedApplication = req.body;
        const { id } = req.params;
        await Application.findByIdAndUpdate(id, { $set: updatedApplication });
        res.send(updatedApplication);
        res.status(200);
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.send(error);
    }
}

module.exports = { getApplications, createApplication, deleteApplication, updateApplication, getApplicationById, getUserApplication };
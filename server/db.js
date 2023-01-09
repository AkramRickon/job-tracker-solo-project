const mongoose = require('mongoose');
const DB_PORT = 27017
const DB_NAME = "Job_Tracker"
const uri = `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`

module.exports = { mongoose, uri };
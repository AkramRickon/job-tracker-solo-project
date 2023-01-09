
const {mongoose} = require('../db');

const applicationSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobNature: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    appliedDate: {
        type: Date,
        default: Date.now
    },
    interviewDate: {
        type: Date
    },
    status: {
        type: String,
        required: true
    },
    jobLink: {
        type: String,
        required: true
    }
})

const Application = mongoose.model('Application', applicationSchema);

module.exports=Application;
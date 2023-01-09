const router = require('express').Router();
const applicationController = require('./controllers/application');

router.get('/application', applicationController.getApplications);

router.get('/application/:id', applicationController.getApplicationById);

router.post('/application', applicationController.createApplication);

router.delete('/application/:id', applicationController.deleteApplication);

router.put('/application/:id', applicationController.updateApplication);

module.exports = router;
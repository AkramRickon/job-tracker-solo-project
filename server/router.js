const router = require('express').Router();
const applicationController = require('./controllers/application');
const userController = require('./controllers/users');
const { authMiddleware } = require('./middlewares/auth');

router.get('/application',  applicationController.getApplications);

router.get('/application/:id', applicationController.getApplicationById);

router.post('/application', applicationController.createApplication);

router.delete('/application/:id', applicationController.deleteApplication);

router.put('/application/:id', applicationController.updateApplication);

router.post('/auth/signin', userController.getUser);

router.post('/auth/signup', userController.createUser);

module.exports = router;
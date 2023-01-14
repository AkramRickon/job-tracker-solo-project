const router = require('express').Router();
const applicationController = require('./controllers/application');
const userController = require('./controllers/users');
const { authMiddleware } = require('./middlewares/auth');

router.get('/application', authMiddleware, applicationController.getApplications);

router.get('/application/:id',authMiddleware, applicationController.getApplicationById);

router.post('/application', applicationController.createApplication);

router.delete('/application/:id', applicationController.deleteApplication);

router.put('/application/:id', applicationController.updateApplication);

router.post('/signin', userController.getUser);

router.post('/signup', userController.createUser);

module.exports = router;
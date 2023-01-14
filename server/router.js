const router = require('express').Router();
const applicationController = require('./controllers/application');
const userController = require('./controllers/users');
const { authMiddleware } = require('./middlewares/auth');

router.get('/application', authMiddleware, applicationController.getApplications);

router.get('/application/:id', authMiddleware, applicationController.getApplicationById);

router.post('/application',authMiddleware, applicationController.createApplication);

router.post('/application/user', authMiddleware, applicationController.getUserApplication);

router.delete('/application/:id',authMiddleware, applicationController.deleteApplication);

router.put('/application/:id',authMiddleware, applicationController.updateApplication);

router.post('/signin', userController.getUser);

router.post('/signup', userController.createUser);

module.exports = router;
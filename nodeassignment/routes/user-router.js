const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/user-controller');

userRoutes.post('/api/userdata', userController.add);

userRoutes.get('/api/user', userController.getUserProfiles);

userRoutes.post('/api/user/delete', userController.deletUserProfile);

userRoutes.post('/api/user/update', userController.updateUserProfile);


module.exports = userRoutes;

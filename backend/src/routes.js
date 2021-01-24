const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/user/create', UserController.store);

module.exports = routes;
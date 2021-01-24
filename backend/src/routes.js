const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.post('/user', UserController.store);
routes.get('/user', UserController.show);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.destroy);

module.exports = routes;
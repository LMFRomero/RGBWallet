const UserController = require('./controllers/UserController');
const AdminController = require('./controllers/AdminController');
const SessionController = require('./controllers/SessionController');

const adminFunc = require('./services/adminFunc');

const express = require('express');
const passport = require('passport');

const routes = express.Router();

routes.post('/admin/user', /*SessionController.isAuth,*/ UserController.store);
routes.get('/admin/user', /*SessionController.isAuth,*/ AdminController.showAllUsers);
routes.put('/admin/user/:id', /*SessionController.isAuth,*/ UserController.update);
routes.delete('/admin/user/:id', /*SessionController.isAuth,*/ UserController.destroy);

routes.post('/login', passport.authenticate('local'), (req, res) => { res.status(200).end() });
routes.post('/validate', SessionController.isAuth, (req, res) => { res.status(200).end() });
routes.post('/logout', SessionController.isAuth, SessionController.destroy);

routes.post('/admin/user/addAmount', SessionController.isAuth, adminFunc.addAmount);
routes.post('/admin/resetBalance', SessionController.isAuth, adminFunc.resetAllBalance);

routes.get('/user', UserController.show);


module.exports = routes;
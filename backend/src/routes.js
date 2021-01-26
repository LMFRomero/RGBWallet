const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const adminFunc = require('./services/admin');

const express = require('express');
const passport = require('passport');

const routes = express.Router();

routes.post('/admin/user', /*SessionController.isAuth, SessionController.isAdmin,*/ UserController.store);
routes.get('/admin/user', /*SessionController.isAuth, SessionController.isAdmin,*/ UserController.showAllUsers);
routes.put('/admin/user/:id', /*SessionController.isAuth, SessionController.isAdmin,*/ UserController.update);
routes.delete('/admin/user/:id', /*SessionController.isAuth, SessionController.isAdmin,*/ UserController.destroy);

routes.post('/login', passport.authenticate('local'), (req, res) => { res.status(200).end() });
routes.post('/validate', SessionController.isAuth, (req, res) => { res.status(200).end() });
routes.post('/logout', SessionController.isAuth, SessionController.destroy);

routes.post('/admin/user/addAmount/:id', SessionController.isAuth, SessionController.isAdmin, adminFunc.addAmount);
routes.post('/admin/resetBalance', SessionController.isAuth, SessionController.isAdmin, adminFunc.resetAllBalance);

routes.get('/user', UserController.show);


module.exports = routes;
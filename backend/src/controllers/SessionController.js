const { SafeFindById } = require('../services/safeExec');
const User = require('../models/User');

const passport = require('passport');
require('../services/passport')(passport);

module.exports = {
    destroy (req, res) {
        if (req.isAuthenticated()) 
            req.logOut();

        return res.status(200).end();
    },

    isAuth (req, res, next) {
        // console.log(req);
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.status(401).end();
        }
    }
}
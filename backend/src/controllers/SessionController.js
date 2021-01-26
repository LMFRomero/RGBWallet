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
    },

    async isAdmin (req, res, next) {
        if (!req.session || !req.session.passport || !req.session.passport.user) {
            return res.status(401).end();
        }
        
        const user = await SafeFindById(User, req.session.passport.user.id);
        if (!user) {
            return res.status(404).json({ "message": "User could not be found" });
        }

        if (user.isAdmin) {
            next();
        }

        return res.status(403).end();
    },

    isSelfQuery (req, res, next) {
        if (!req.session || !req.session.passport || !req.session.passport.user) {
            return res.status(401).end();
        }

        if (req.query.id == req.session.passport.user.id) {
            next();
        }

        return res.status(403).end();
    },

    isSelfParams (req, res, next) {
        if (!req.session || !req.session.passport || !req.session.passport.user) {
            return res.status(401).end();
        }

        if (req.params.id == req.session.passport.user.id) {
            next();
        }

        return res.status(403).end();
    }
}
const LocalStrategy = require('passport-local');
const AdminController = require('../controllers/AdminController');
const Admin = require('../models/Admin');

module.exports = function (passport) {
    passport.serializeUser(function(user, done){
        done(null, {
            id: user._id,
            name: user.name
        });
    });
 
    passport.deserializeUser(function(obj, done){
        Admin.findById(obj.id, function(err,user){
            done(err, user);    
        });
    });

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
        (username, password, done) => {
            AdminController.login(username, password).then((user => {

                //'done' is a function that returns to a function that uses LocalStrategy (e.g. passport.authenticate('local', callback) )
                //'done' is a function of 3 parameters: (err, user, info)
                if (user === -1) {
                    return done(503, null, { message: "MongoDB is unavailable at the moment" })
                }

                if (!user) {
                    return done(null, null, { message: "Invalid authentication"});
                }
    
                else {
                    return done(null, user, { message: "Ok" });
                }
            }));
        }
    ));
}
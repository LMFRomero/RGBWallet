const User = require('../models/User');
const { SafeCreateObj } = require('../services/safeExec');

module.exports = {
    async store (req, res) {
        let { name, username, hasSold, isInProject, weeksDone, isAdmin } = req.body;

        if (!isAdmin) {
            isAdmin = false;
        }

        let isDeleted = false;
        let balance = 0;

        user = await SafeCreateObj(User, { name, username, hasSold, isInProject, weeksDone, isAdmin, isDeleted, balance });
        
        if (!user) {
            console.log("User not created");
            return res.status(500).end();
        }

        return res.status(200).end();
    }
}
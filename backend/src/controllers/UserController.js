const User = require('../models/User');
const { SafeCreateObj, SafeFindById } = require('../services/safeExec');

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

        return res.status(201).end();
    },

    async destroy (req, res) {
        if (!req.params.id) {
            return res.status(400).end();
        }

        let user = await SafeFindById(User, req.params.id);
        if (!user) {
            return res.status(400).end();
        }

        user.isDeleted = true;
        
        try {
            await user.save()
        } catch (error) {
            console.log(error);
            return res.status(500).end();
        }

        return res.status(200).end();
    }
}
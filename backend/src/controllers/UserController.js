const User = require('../models/User');
const { SafeCreateObj, SafeFindById, SafeFind, SafeFindOne } = require('../services/safeExec');

module.exports = {
    async store (req, res) {
        let { name, username, hasSold, isInProject, weeksDone } = req.body;

        let isDeleted = false;
        let balance = 0;

        user = await SafeCreateObj(User, { name, username, hasSold, isInProject, weeksDone, isDeleted, balance });
        
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
    },

    async update (req, res) {
        if (!req.params.id) {
            return res.status(400).end();
        }

        let { name, username, hasSold, isInProject, weeksDone } = req.body;

        let user = await SafeFindById(User, req.params.id);
        if (!user) {
            return res.status(400).end();
        }
        
        if (name != null) {
            user.name = name;
        }
        if (username != null) {
            user.username = username;
        }
        if (hasSold != null) {
            user.hasSold = hasSold;
        }
        if (isInProject != null) {
            user.isInProject = isInProject;
        }
        if (weeksDone != null) {
            user.weeksDone = weeksDone;
        }

        try {
            await user.save();
        } catch (error) {
            console.log(error);
            return res.status(500).end();
        }
    },

    async show (req, res) {
        if (req.query.id) {
            let user = await SafeFindById(User, req.query.id);
            if (!user || user.isDeleted) {
                return res.status(404).end();
            }

            return res.status(200).json(user);
        }

        else if (req.query.username) {
            let user = await SafeFindOne(User, { username: req.query.username });
            if (!user || user.isDeleted) {
                return res.status(404).end();
            }

            return res.status(200).json(user);
        }

        else {
            return res.status(400).end();
        }
    }
}
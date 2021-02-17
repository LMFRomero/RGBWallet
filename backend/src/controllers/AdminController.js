const User = require('../models/User');
const Admin = require('../models/Admin');

const { SafeCreateObj, SafeFindById, SafeDeleteOne, SafeFindOne, SafeFind } = require('../services/safeExec');
const bCrypt = require('../services/hash');

module.exports = {
    async store (req, res) {
        let { name, username, password } = req.body;

        password = bCrypt.createHash(password);

        const admin = await SafeCreateObj(Admin, { name, username, password });
        
        if (!admin) {
            console.log("User not created");
            return res.status(500).end();
        }

        return res.status(201).end();
    },

    async destroy (req, res) {
        if (!req.params.id) {
            return res.status(400).end();
        }

        let admin = await SafeDeleteOne(Admin, { _id: req.params.id });
        if (!admin) {
            return res.status(400).end();
        }

        return res.status(200).end();
    },

    async update (req, res) {
        if (!req.params.id) {
            return res.status(400).end();
        }

        let { name, username, password } = req.body;

        let admin = await SafeFindById(Admin, req.params.id);
        if (!admin) {
            return res.status(400).end();
        }
        
        if (name != null) {
            admin.name = name;
        }
        if (username != null) {
            admin.username = name;
        }
        if (password != null) {
            admin.password = createHash(password);
        }

        try {
            await admin.save();
        } catch (error) {
            console.log(error);
            return res.status(500).end();
        }
    },

    async showAllUsers (req, res) {
        let users = await SafeFind(User, { isDeleted: false });
        if (!users) {
            return res.status(404).end();
        }

        return res.status(200).json(users);
    },

    async login (username, password) {
        if (!username || !password) {
            return null;
        }

        const admin = await SafeFindOne(Admin, { "username": username });
        if (!admin)
            return null;
            
        let passwordHash = admin.password;

        if (bCrypt.validateHash(passwordHash, password))
            return admin;
        else
            return null;
    }
}
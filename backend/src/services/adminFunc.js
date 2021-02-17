const { SafeFind, SafeFindById } = require('./safeExec');
const User = require('../models/User');

module.exports = {
    async resetAllBalance (req, res) {
        let users = await SafeFind(User, {});
        if (!users) {
            return res.status(400).json({ "message": "No users" });
        }

        let size = users.length;
        for (let i = 0; i < size; i++) {
            let user = users[i];
            user.balance = 0;

            try {
                await user.save();
            } catch (error) {
                console.log(error);
                return res.status(500).json({ "message": "User could not be saved" });
            }
        }
    },

    async addAmount (req, res) {
        let users = await SafeFind(User, { isDeleted: false });
        if (!users) {
            return res.status(404).json({ "message": "Users not found" });
        }

        let size = users.length;
        for (let i = 0; i < size; i++) {
            let user = users[i];
            let amount = (40 + (5 * user.weeksDone)) * (1 + (user.hasSold && 0.2) + (user.isInProject && 0.1));
            user.balance = user.balance + amount;

            try {
                await user.save();
            } catch (error) {
                console.log(error);
                return res.status(500).json({ "message": "User could not be saved" });
            }
        }
    }
}
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    hasSold: {
        type: Boolean,
        required: true
    },
    isInProject: {
        type: Boolean,
        required: true
    },
    weeksDone: {
        type: Number,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
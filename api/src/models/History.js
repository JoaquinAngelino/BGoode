const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema(
    {
        name:
            { type: String, unique: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model('History', HistorySchema)

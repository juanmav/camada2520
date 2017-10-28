const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = Schema({
    message: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports= Tweet;
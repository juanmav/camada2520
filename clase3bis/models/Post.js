const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = Schema({
   title: { type: String, required: true },
   body: String,
   autor: { type: Schema.Types.ObjectId, ref: 'Persona', required: true  }
});

let Post = mongoose.model('Post', postSchema);

module.exports = Post;
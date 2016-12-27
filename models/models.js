var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: { type: String, required: true},
  email: { type: String, match: /.+@.+\..+/, lowercase: true },
  password: String, // hash created from password
  created_at: { type: Date, default: Date.now }
});

var postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  permalink: { type: String, required: true, unique: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tags: [
    { type: String }
  ],
  comments: [{
    body: String,
    num_likes: { type: Number, default: 0 },
    email: { type: String, match: /.+@.+\..+/, lowercase: true }
  }],
  created_at: { type: Date, default: Date.now },
});

var User = mongoose.model('User', userSchema);
var Post = mongoose.model('Post', postSchema);

module.exports = Post;
module.exports = User;
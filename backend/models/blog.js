const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: String
});

const Blog = mongoose.model('Blog', blogSchema);
const { Post } = require('../models');

const getPost = async (id) => await Post.findById(id);
const getPosts = async (query) => await Post.find(query);
const updatePost = async (
  id,
  updatedPost
) => await Post.findOneAndUpdate(id, updatedPost);

module.exports = {
  getPost,
  getPosts,
  updatePost
}

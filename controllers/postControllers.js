const { Post } = require('../models');
const { postServices } = require('../services');

const archivePost = (req, res) => {
  res.status(200).send({ message: 'archive placeholder' });
};

const createPost = async (req, res) => {
  const data = req.body;
  const post = new Post(data);

  const result = await post.save();

  res.status(200).send({ message: 'Post created', data: result });
};

const getPosts = async (req, res) => {
  const result = await postServices.getPosts();

  res.status(200).send({ data: result });
};

const getPost = (req, res) => {
  res.status(200).send({ message: 'get posts placeholder' });
};

const updatePost = (req, res) => {
  res.status(200).send({ message: 'update placeholder' });
};

module.exports = {
  archivePost,
  createPost,
  getPost,
  getPosts,
  updatePost
};
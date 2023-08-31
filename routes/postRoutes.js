const { PostControllers } = require('../controllers');

const { postMiddleware } = require('../middleware');
const { validateCreate } = postMiddleware;

const {
  archivePost,
  createPost,
  getPost,
  getPosts,
  updatePost
} = PostControllers;

module.exports = function(router) {
  const basePath = '/posts';

  router.route(basePath)
    .post(validateCreate, createPost)
    .get(getPosts);

  router.route(`${basePath}/:id`)
    .get(getPost)
    .put(updatePost)
    .delete(archivePost);

  return router;
};

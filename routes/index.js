const CenterRoutes = require('./centerRoutes');
const PostsRoutes = require('./postRoutes');

module.exports = function(router) {

  CenterRoutes(router);
  PostsRoutes(router);

  return router;
};

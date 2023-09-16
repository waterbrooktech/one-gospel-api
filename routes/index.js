const AuthRoutes = require('./authRoutes');
const CenterRoutes = require('./centerRoutes');
const PostsRoutes = require('./postRoutes');

module.exports = function(router) {

  AuthRoutes(router);
  CenterRoutes(router);
  PostsRoutes(router);

  return router;
};

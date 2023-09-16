const { confirmPassword } = require("../controllers/authControllers");

module.exports = function(router) {
  const basePath = '/auth';

  router.route(`${basePath}/confirm-password`).post(confirmPassword);

  return router;
};
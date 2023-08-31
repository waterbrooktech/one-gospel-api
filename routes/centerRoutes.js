const { CenterControllers } = require('../controllers');
const { centerMiddleware } = require('../middleware');
const { validateCreate } = centerMiddleware;

const {
  addMemberToGospelCenter,
  archiveGospelCenter,
  createGospelCenter,
  getGospelCenter,
  getGospelCenters,
  updateGospelCenters
} = CenterControllers;

module.exports = function(router) {
  const basePath = '/one-gospel-centers';

  router.route(basePath)
    .post(validateCreate, createGospelCenter)
    .get(getGospelCenters);

  router.post(`${basePath}/:id/register`, addMemberToGospelCenter);

  router.route(`${basePath}/:id`)
    .get(getGospelCenter)
    .put(updateGospelCenters)
    .delete(archiveGospelCenter);

  return router;
};

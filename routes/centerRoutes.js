const { CenterControllers } = require('../controllers');
const { centerMiddleware } = require('../middleware');
const { validateMemberRegistration } = require('../middleware/centerMiddleware');
const { sendOneGospelRegistrationEmail } = require('../utils/notifications.utils');
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

  router.route(`${basePath}/:id/register`)
    .post(validateMemberRegistration, addMemberToGospelCenter);

  router.route(`${basePath}/:id`)
    .get(getGospelCenter)
    .put(updateGospelCenters)
    .delete(archiveGospelCenter);

    // Only for testing emails for now
  // router.post('/testing', (req, res) => {
  //   try {
  //     sendOneGospelRegistrationEmail({ email: 'abiso.lawal@gmail.com'}, req.body);
  //     res.status(200).send({ message: 'Email sent successfully' });
  //   } catch(e) {
  //     return res.status(500).send({ message: 'Email failed to send', error: e });
  //   }
  // });

  return router;
};

const { Center } = require('../models');
const { centerServices } = require('../services');

const addMemberToGospelCenter = (req, res) => {
  res.status(200).send({ message: 'add member placeholder' });
};

const archiveGospelCenter = (req, res) => {
  res.status(200).send({ message: 'archive placeholder' });
};

const createGospelCenter = async (req, res) => {
  const center = new Center(req.body);

  const result = await centerServices.saveCenter(center);

  res.status(200).send({ message: 'Center created successfully.', data: result });
};

const getGospelCenters = async (req, res) => {
  const result = await centerServices.getCenters();
  res.status(200).send(
    { data: result.map(({ address, area, maxCapacity, registeredAttendees }) => ({ address, area, maxCapacity, registeredCount: registeredAttendees.length })) }
  );
};

const getGospelCenter = (req, res) => {
  res.status(200).send({ message: 'get Gospel center placeholder' });
};

const updateGospelCenters = (req, res) => {
  res.status(200).send({ message: 'update placeholder' });
};

module.exports = {
  addMemberToGospelCenter,
  archiveGospelCenter,
  createGospelCenter,
  getGospelCenters,
  getGospelCenter,
  updateGospelCenters
};
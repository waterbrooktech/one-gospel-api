const { Center } = require('../models');

const getCenter = async (id) => await Center.findById(id);
const getCenters = async (query) => await Center.find(query);
const saveCenter = async (center) => await center.save();
const updateCenter = async (
  id,
  updatedCenter
) => await Center.findOneAndUpdate(id, updatedCenter);

module.exports = {
  getCenter,
  getCenters,
  saveCenter,
  updateCenter
}

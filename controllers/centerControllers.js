const { Center, Member } = require('../models');
const { centerServices, memberServices } = require('../services');

const addMemberToGospelCenter = async (req, res) => {
  const { id } = req.params;
  const { email, name, phoneNumber } = req.body;

  const center = await centerServices.getCenter(id);

  if (!center) {
    return res.status(400).send({ message: 'Center does not exist.' });
  }

  if (center.maxCapacity <= center.registeredAttendees.length) {
    return res.status(400).send({ message: "We're sorry but this center has reached full capacity. Please try another center close to you." });
  }

  let member = await memberServices.getMember({ $or: [{ email }, { phoneNumber }] });

  if (!member) {
    member = await memberServices.saveMember(new Member({ email, name, phoneNumber }));
  } else {
    if (member.email != email)
      member.email = email;

    if (member.phoneNumber != phoneNumber && !member.altPhoneNumbers.includes(phoneNumber))
      member.altPhoneNumbers.push(phoneNumber);

    member = await memberServices.updateMember(member._id, member);
  }

  if (Array.isArray(center.registeredAttendees) && !center.registeredAttendees.includes(member._id)) {
    center.registeredAttendees.push(member._id);
  } else {
    center.registeredAttendees = [member._id];
  }

  await centerServices.saveCenter(center);

  res.status(200).send({ message: 'You have successfully registered for this center. See you soon!' });
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
    { data: result.map(({ _id, address, area, maxCapacity, registeredAttendees }) => ({ address, area, id: _id, maxCapacity, registeredCount: registeredAttendees.length })) }
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
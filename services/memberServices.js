const { Member } = require('../models');

const getMember = async (filters) => await Member.findOne(filters).exec();
const saveMember = async (member) => await member.save();
const updateMember = async (
  id,
  updatedMember
) => await Member.findOneAndUpdate(id, updatedMember);

module.exports = {
  getMember,
  saveMember,
  updateMember
}

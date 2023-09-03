const { DOMAIN_NAME, emailClient } = require('../clients/email.client');
const { isValidEmail } = require('./string.utils');

const sendOneGospelRegistrationEmail = async  (to = {}, data = {}) => {
  const {
    address = 'N/A',
    contacts = []
  } = data;

  if (!to.email || !isValidEmail(to.email)) {
    const errorString = 'Invalid email address. Please provide a valid email';
    console.log(errorString)
    return null;
  }

  const formattedContacts = contacts.map(contact => `${contact.name} <${contact.phoneNumber}>`).join(', ');

  const emailPayload = {
    from: 'The Waterbrook Community <community@thewaterbrook.com>',
    to: to.email,
    cc: 'community@thewaterbrook.com',
    subject: 'Thank You for Registering for One Gospel!',
    template: 'one gospel registration',
    'h:X-Mailgun-Variables': JSON.stringify({
      address, contacts: formattedContacts
    })
  };

  try {
    await emailClient.messages.create(DOMAIN_NAME, emailPayload);
    console.log(`Email sent to ${to.email} successfully.`);
  } catch(e) {
    console.log('e => ', e);
    throw new Error(e);
  }
};

module.exports = { sendOneGospelRegistrationEmail };
const { DOMAIN_NAME, emailClient } = require('../clients/email.client');
const { isValidEmail } = require('./string.utils');

const sendOneGospelRegistrationEmail = async  (to = {}, data = {}) => {
  const { locations = [] } = data;

  if (!to.email || !isValidEmail(to.email)) {
    const errorString = 'Invalid email address. Please provide a valid email';
    return null;
  }

  const formattedLocations = locations.map(location => ({ ...location, contacts: location.contacts.map(contact => `${contact.name} <${contact.phoneNumber}>`).join(', ') }));

  if (locations.length < 1) {
    const errorString = 'Must have at least 1 location';
    return null;
  }

  const emailPayload = {
    from: 'The Waterbrook Community <community@thewaterbrook.com>',
    to: to.email,
    cc: 'community@thewaterbrook.com',
    subject: 'Thank You for Registering for One Gospel!',
    template: 'one gospel registration',
    'h:X-Mailgun-Variables': JSON.stringify({ locations: formattedLocations })
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
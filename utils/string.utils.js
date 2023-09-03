const isValidEmail = (email) => {
  if (!email) return false;

  return /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(email);
};

const isValidPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return false;

  return /\d{11}/.test(phoneNumber);
};

const isValidURL = (link) => {
  try {
    new URL(link);
    return true;
  } catch (_) {
    return false;
  }
};


module.exports = {
  isValidEmail,
  isValidPhoneNumber,
  isValidURL
};
require('dotenv').config();

const formData = require('form-data');
const Mailgun = require("mailgun.js");

const DOMAIN_NAME = process.env.MAILGUN_DOMAIN;

const mailgun = new Mailgun(formData);
const emailClient = mailgun.client({
  key: process.env.MAILGUN_API_KEY,
  url: "https://api.eu.mailgun.net",
  username: 'api'
});

module.exports = { emailClient, DOMAIN_NAME };
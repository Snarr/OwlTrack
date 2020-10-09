var Twit = require('twit');
const config = require('../config.json');
var client = new Twit(config.twitter);
module.exports = client;

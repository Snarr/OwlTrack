const Unsplash = require('unsplash-js');
const config = require('../config.json');
const client = new Unsplash.default({ accessKey: config.unsplash.key });
module.exports = {
    "client": client,
    "toJson": Unsplash.toJson
};
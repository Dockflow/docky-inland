const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'Docky Inland' });

module.exports = logger;
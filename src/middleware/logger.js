


// logger4js levels:
//ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF

const log4js = require('log4js');
log4js.configure({
  appenders: { msk_server: { type: 'file', filename: './logs/msk_server.log' } },
  categories: { default: { appenders: ['msk_server'], level: 'info' } },
  pm2: true
});
 
const logger = log4js.getLogger('msk_server');

// exports.logger = function(){
//     return logger;
// };

//test messages:
// logger.trace('Entering server testing');
// logger.debug('Got server.');
 //logger.info('Server started.');
// logger.warn('Database is running.');
// logger.error('Error in connection');
// logger.fatal('Server stopped because of a fatal error.');

module.exports = logger;
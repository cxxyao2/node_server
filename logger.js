var url = "http://mylogger.io/log";

function log(message) {
  // send an HTTP request
  console.log(message);
}

module.exports.log = log;


// module.exports = log;
// const log = require("./logger");
// log("xxx");


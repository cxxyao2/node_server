var url = "http://mylogger.io/log";

function log(message) {
  // send an HTTP request
  console.log(message);
}
//case1  export an object
module.exports.log = log;

//case2  export just an fucntion
/* module.exports = log;
const log = require("./logger");
log("xxx");
 */

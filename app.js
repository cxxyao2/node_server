// console.log(module);
// import an object
const logger = require("./logger");
logger.log("post://");
console.log(__filename);
console.log(__dirname);

const os = require("os");
var meme = os.totalmem();
// Template string
console.log(`total memer is ${meme}`);

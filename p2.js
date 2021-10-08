var os = require('os');

console.log("OS CPU Architecture: " +
os.arch());

console.log("Free Memory System: " +
os.freemem());

console.log("Total Memory of the System :" +
os.totalmem());

console.log("os platform: "+
os.platform());

console.log("Information about the current User: " +
os.userInfo());
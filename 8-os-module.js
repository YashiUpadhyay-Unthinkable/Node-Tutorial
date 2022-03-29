
const os = require('os');

// to get info about current user
const user = os.userInfo();
console.log(user);

// to get system's uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// general methods of os
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOS);
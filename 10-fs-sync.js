
// file system
const {readFileSync, writeFileSync} = require('fs');  // object destructuring

console.log("START");

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

writeFileSync('./content/result.txt', `Here is the result : ${first}, ${second}`, 
              {flag: 'a'});

console.log("Done with the task!");
console.log("Starting new task!");

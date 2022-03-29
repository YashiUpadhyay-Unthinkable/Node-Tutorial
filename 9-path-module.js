const path = require('path');  // inbuilt module

// tells the path separator of this system
console.log(path.sep);  

// shows the path of current file to specified file
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// filename
const base = path.basename(filePath);
console.log(base);

// absolute path of mentioned file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);



const names = require("./4-mod1");   // importing names
const sayhi = require("./5-mod2");   // importing fn
const data = require("./6-mod3");    // importing different types of data

// use ./ for accessing file in current directory
// use ../ for accessing file in some outside directory

sayhi("Aarti");
sayhi(names.yashi);

console.log(sayhi);
console.log(names);
console.log(data);

require("./7-mod4");  // this also works ... it means running this file ... variable me lena jruri nhi h
// it depends on the requirement

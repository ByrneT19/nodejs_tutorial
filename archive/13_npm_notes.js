// npm - global command, comes with node
// npm --version (check version in terminal)

// local dependancy - use it only in this particular project (most used)
// npm i <packageName> (use this to install locally)

// global dependancy - use it any project (less used now due to npx)
// npm install -g <packageName>
// sudo install -g <packageName> (Mac/Linux)

// package.json - manifest file (stores important info about project/package)
// manual approach (create packagae.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)`

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('Hello World!!!');
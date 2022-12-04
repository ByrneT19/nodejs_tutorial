//CommonJS, every file is module (by default)
//Modules - Enscapulated Code (only share minimum)
const names = require('./archive/4_names');
const sayHi = require('./archive/5_utils');
const data = require('./archive/6_alternative_export _methods');
require('./7_mind_grenade');
sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
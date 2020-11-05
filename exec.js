/* const printModule = require("./module");

printModule("Hey Export Module") */

// const exportModule = require("./module");
const {printModule , opt} = require("./module");

exportModule.printModule("Hey Module");
exportModule.opt("Hey Opt");
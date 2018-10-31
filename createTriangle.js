const {categorizeTriArgs} = require("./src/patternUtils.js");
const {createPatternsOfType} = require("./src/patternsLibrary.js");
const main = function(){
  let arguments = process.argv.slice(2);
  let patternDetails= categorizeTriArgs(arguments);
  console.log(createPatternsOfType([patternDetails]));
}
main();

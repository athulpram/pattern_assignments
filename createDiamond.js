const {categorizeDiaArgs} = require("./src/patternUtils.js");
const {createPatternsOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  let patternDetails = categorizeDiaArgs(arguments);
  console.log(createPatternsOfType([patternDetails]));
}
main();

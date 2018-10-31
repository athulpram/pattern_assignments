const {createPatternsOfType} = require("./src/patternsLibrary.js");
const {categorizeArguments} = require("./src/patternUtils.js");

const main = function(){
  arguments = process.argv.slice(2);
  patternDetails = categorizeArguments(arguments);

  console.log(createPatternsOfType(patternDetails));
}
main();

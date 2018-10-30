const {createPatternOfType} = require("./src/patternsLibrary.js");
const {categorizeArguments} = require("./src/patternUtils.js");

const main = function(){
  arguments = process.argv.slice(2);
  patternDetails = categorizeArguments(arguments);

  console.log(createPatternOfType(patternDetails).join("\n"));
}
main();

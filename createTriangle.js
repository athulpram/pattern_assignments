const {categorizeArguments} = require("./src/patternUtils.js");
const {createPatternsOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments[0]=arguments[0] + "_triangle";
  let patternDetails= categorizeArguments(arguments);
  console.log(createPatternsOfType(patternDetails));
}
main();

const {categorizeArguments} = require("./src/patternUtils.js");
const {createPatternsOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments[0] = arguments[0] + "_rectangle";
  let patternDetails= categorizeArguments(arguments);
  let rectangle=createPatternsOfType(patternDetails);
  console.log(rectangle);
}
main();

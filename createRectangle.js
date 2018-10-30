const {categorizeArguments} = require("./src/patternUtils.js");
const {createPatternOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments[0] = arguments[0] + "_rectangle";
  let patternDetails= categorizeArguments(arguments);
  let rectangle=createPatternOfType(patternDetails);
  console.log(rectangle.join("\n"));  
}
main();

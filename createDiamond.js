const {categorizeArguments} = require("./src/patternUtils.js");
const {createPatternOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments[0]=arguments[0]+"_diamond";
  let patternDetails = categorizeArguments(arguments);

  console.log(createPatternOfType(patternDetails).join("\n"));
}
main();

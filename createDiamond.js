const {categorizeArguments} = require("./src/patternUtils.js");
const {generateDiamondOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments.unshift("diamond");
  let {type,height} = categorizeArguments(arguments);
 
  console.log(generateDiamondOfType(type,height));
}
main();

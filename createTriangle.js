const {categorizeArguments} = require("./src/patternUtils.js");
const {createTriangleOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments.unshift("triangle");
  let {type,height} = categorizeArguments(arguments);
  console.log(createTriangleOfType(type,height));
}
main();

const {categorizeArguments} = require("./src/patternUtils.js");
const {createRectangleOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments.unshift("rectangle");
  let {type,width,height} = categorizeArguments(arguments);
  let rectangle=createRectangleOfType(type,width,height);
  console.log(rectangle);
}
main();

const {categorizeArguments} = require("./src/patternUtils.js");
const {createRectangleOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments[0] = arguments[0] + "_rectangle";
  let {type,width,height} = categorizeArguments(arguments)[0];
  let rectangle=createRectangleOfType(type,width,height);
  console.log(rectangle.join("\n"));  
}
main();

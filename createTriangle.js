const {categorizeArguments} = require("./src/patternUtils.js");
const {createTriangleOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments[0]=arguments[0] + "_triangle";
  let {type,height} = categorizeArguments(arguments)[0];
  console.log(createTriangleOfType(type,height).join("\n"));  
}
main();

const {categorizeRectArgs} = require("./src/patternUtils.js");
const {createPatternsOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  let patternDetails= categorizeRectArgs(arguments);
  let rectangle=createPatternsOfType([patternDetails]);
  console.log(rectangle);
}
main();

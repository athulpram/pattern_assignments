const {categorizeArguments} = require("./src/patternUtils.js");
const {createRectangleOfType} = require("./src/patternsLibrary.js");
const main = function(){
  /*let typeOfRect=process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle ="";*/
  arguments = process.argv.slice(2);
  arguments.unshift("rectangle");
  let {type,width,height} = categorizeArguments(arguments);
  let rectangle=createRectangleOfType(type,width,height);
  console.log(rectangle);
}
main();

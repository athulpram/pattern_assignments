const {createRectangleOfType} = require("./src/patternsLibrary.js");
const main = function(){
  let typeOfRect=process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle ="";
  
  rectangle=createRectangleOfType(typeOfRect,width,height);
  console.log(rectangle);
}
main();

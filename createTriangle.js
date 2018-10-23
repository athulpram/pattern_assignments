const {createTriangleOfType} = require("./src/patternsLibrary.js");
const main = function(){
  let triangleType = process.argv[2];
  let height = +process.argv[3];
  console.log(createTriangleOfType(triangleType,height));
}
main();

const {categorizeArguments} = require("./src/patternUtils.js");
const {generateDiamondOfType} = require("./src/patternsLibrary.js");
const main = function(){
  arguments = process.argv.slice(2);
  arguments[0]=arguments[0]+"_diamond";
  let {type,height} = categorizeArguments(arguments)[0];

  console.log(generateDiamondOfType(type,height).join("\n"));
}
main();

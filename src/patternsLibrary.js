const {repeatCharacter,
  generateFilledRectangle,
  generateEmptyRectangle,
  generateAlternatingRectangle,
  generateLine,
  generateTriangle,
  addSpaces,
  generateFilledDiamond,
  generateAngledDiamond,
  generateDiamond,
  generateHollowDiamond,
  validateHeight}=require("./patternUtils.js");

const createRectangleOfType = function(typeOfRect,width,height){
  let rectangle = "";
  if(typeOfRect=="filled"){
    rectangle=generateFilledRectangle(height,width);
  }

  if(typeOfRect=="empty"){
    rectangle=generateEmptyRectangle(height,width);
  }

  if(typeOfRect=="alternating"){
    rectangle=generateAlternatingRectangle(height,width);
  }
  return rectangle;
}

const createTriangleOfType = function(triangleType,height){
  let isRight = false;
  if(triangleType=="right"){
    isRight = true;
  }
  return (generateTriangle(isRight,height));
}
const generateDiamondOfType=function(typeOfDiamond,height){
  let diamond="";
  let delimiter="";
  height = validateHeight(height);
  if(typeOfDiamond=="hollow"){
    diamond=generateHollowDiamond(height)
  }
  if(typeOfDiamond=="angled"){
    diamond=generateAngledDiamond(height);
  }
  if(typeOfDiamond=="filled"){
    diamond=generateFilledDiamond(height);
    delimiter="\n";
  }
  return diamond;
}

exports.generateDiamondOfType = generateDiamondOfType;
exports.createTriangleOfType=createTriangleOfType;
exports.createRectangleOfType=createRectangleOfType;

const {
  repeatCharacter,
  generateLine,
  addSpaces,
  validateHeight
} = require("./patternUtils.js");

const generateFilledRectangle = function(height,width){
  let rectangle = [];
  for(let line=0;line<height;line++){
    rectangle.push(repeatCharacter("*",width));
  }
  return rectangle;
}

const generateEmptyRectangle=function(height,width){
  let rectangle = [repeatCharacter("*",width)];
  for(let line=0;line<height-2;line++){
    rectangle.push("*"+repeatCharacter(" ",width-2)+"*");
  }
  rectangle.push(repeatCharacter("*",width));
  return rectangle;
}

const generateAlternatingRectangle = function(height,width){

  let rectangle = [];
  for(let line=0;line<height;line++){
    rectangle.push(repeatCharacter("*",width));
    line++;
    if(line<height){
      rectangle.push(repeatCharacter("-",width));
    }
  }
  return rectangle;
}



const createRectangleOfType = function(typeOfRect,width,height){
  rectangleMapping = {
    "filled" : generateFilledRectangle,
    "empty" : generateEmptyRectangle,
    "alternating" : generateAlternatingRectangle
  }
  
  let rectangle = rectangleMapping[typeOfRect](height,width);
  return rectangle;
}

const generateTriangle = function(isRight,height){
  triangle=[];
  for(lineNumber=1;lineNumber<=height;lineNumber++){
    triangle.push(generateLine(height,lineNumber,isRight));
  }
  return triangle;
}

const generateRightTriangle = function(height){
  return generateTriangle(true,height);
}

const generateLeftTriangle = function(height){
  return generateTriangle(false,height);
}


const createTriangleOfType = function(triangleType,height){
  triangleMapping = {
    "right" : generateRightTriangle,
    "left" : generateLeftTriangle
  };
  return triangleMapping[triangleType](height);
}


const generateDiamond = function(firstCharacter,lastCharacter,characterToFill,lineNumber,width){
  let line=firstCharacter;
  let spaces="";
  let timesToFill = 2*lineNumber-3;
  line += repeatCharacter(characterToFill,timesToFill);
  line += lastCharacter;
  let numberOfSpaces =(width-line.length)/2;
  spaces += repeatCharacter(" ",numberOfSpaces);
  if(lineNumber==1||lineNumber==width){
    line=firstCharacter;
  }
  return spaces+line+spaces;
}

const generateAngledDiamond=function (height){
  let diamond="";
  let spaces="";
  for(let characterIndex=1;characterIndex<(height/2);characterIndex++){
    spaces+=" ";
  }
  diamond=[spaces+"*"+spaces];
  for(let lineNumber=2;lineNumber<height/2;lineNumber++){
    diamond.push(generateDiamond("/","\\"," ",lineNumber,height));
  }
  diamond.push(generateDiamond("*","*"," ",Math.floor(height/2+1),height));
  for(let lineNumber=Math.floor(height/2);lineNumber>1;lineNumber--){
    diamond.push(generateDiamond("\\","/"," ",lineNumber,height));
  }
  diamond.push(spaces+"*"+spaces);
  return diamond;
}

const generateHollowDiamond = function(height){
  let diamond=[];
  for(let lineNumber=1;lineNumber<=Math.ceil(height/2);lineNumber++){
    diamond.push(generateDiamond("*","*"," ",lineNumber,height));
  }
  for(let lineNumber=Math.ceil(height/2-1);lineNumber>0;lineNumber--){
    diamond.push(generateDiamond("*","*"," ",lineNumber,height));
  }
  return diamond;
} 

const generateFilledDiamond = function(height){
  let diamond=[];
  for(let lineNumber=1;lineNumber<=Math.ceil(height/2);lineNumber++){
    diamond.push(generateDiamond("*","*","*",lineNumber,height));
  }
  for(let lineNumber=Math.ceil(height/2-1);lineNumber>0;lineNumber--){
    diamond.push(generateDiamond("*","*","*",lineNumber,height));
  }
  return diamond;

}


const generateDiamondOfType=function(typeOfDiamond,height){
  height = validateHeight(height);
  diamondMaps = {
    "hollow" : generateHollowDiamond,
    "angled" : generateAngledDiamond,
    "filled" : generateFilledDiamond
  }
  let diamond=diamondMaps[typeOfDiamond](height)
  return diamond;
}

exports.generateDiamondOfType = generateDiamondOfType;
exports.createTriangleOfType=createTriangleOfType;
exports.createRectangleOfType=createRectangleOfType;

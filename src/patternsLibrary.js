const repeatCharacter = function(character,width){
  line="";
  for(let index=0;index<width;index++){
    line+=character;
  }
  return line;
}

const generateFilledRectangle = function(height,width){
  let rectangle = "";
  let delimiter ="";
  for(let line=0;line<height;line++){
    rectangle+=delimiter+repeatCharacter("*",width);
    delimiter="\n";
  }
  return rectangle;
}

const generateEmptyRectangle=function(height,width){
  let rectangle = repeatCharacter("*",width);
  let delimiter = "\n";
  for(let line=0;line<height-2;line++){
    rectangle+=delimiter+"*"+repeatCharacter(" ",width-2)+"*";
  }
  rectangle +=delimiter+repeatCharacter("*",width);
  return rectangle;
}

const generateAlternatingRectangle = function(height,width){

  let rectangle = "";
  let delimiter = "";
  for(let line=0;line<height;line++){
    rectangle+=delimiter+repeatCharacter("*",width);
    line++;
    delimiter="\n";
    if(line<height){
      rectangle+=delimiter+repeatCharacter("-",width);
    }
  }
  return rectangle;
}


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

const addSpaces = function(line,width){
  while(line.length<width){
    line =" "+line;
  }
  return line;
}

const generateLine = function (width,lineNumber,isRight){
  let line= "";
  line=repeatCharacter("*",lineNumber);
  if(isRight){
    line=addSpaces(line,width);
  }
  return line;
}

const generateTriangle = function(isRight,height){
  delimiter="";
  triangle="";
  for(lineNumber=1;lineNumber<=height;lineNumber++){
    triangle+=delimiter+generateLine(height,lineNumber,isRight);
    delimiter="\n";
  }
  return triangle;
}

const createTriangleOfType = function(triangleType,height){
  let isRight = false;
  if(triangleType=="right"){
    isRight = true;
  }
  return (generateTriangle(isRight,height));
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
  diamond=spaces+"*"+spaces+"\n";
  for(let lineNumber=2;lineNumber<height/2;lineNumber++){
    diamond+=generateDiamond("/","\\"," ",lineNumber,height)+"\n";
  }
  diamond+=generateDiamond("*","*"," ",Math.floor(height/2+1),height);
  for(let lineNumber=Math.floor(height/2);lineNumber>1;lineNumber--){
    diamond+="\n"+generateDiamond("\\","/"," ",lineNumber,height);
  }
  diamond+="\n"+spaces+"*"+spaces;
  return diamond;
}

const generateHollowDiamond = function(height){
  let diamond="";
  let delimiter="";
  for(let lineNumber=1;lineNumber<=Math.ceil(height/2);lineNumber++){
    diamond+=delimiter+generateDiamond("*","*"," ",lineNumber,height);
    delimiter = "\n";
  }
  for(let lineNumber=Math.ceil(height/2-1);lineNumber>0;lineNumber--){
    diamond+=delimiter+generateDiamond("*","*"," ",lineNumber,height);
  }
  return diamond;
} 

const generateFilledDiamond = function(height){
  let diamond="";
  let delimiter="";
  for(let lineNumber=1;lineNumber<=Math.ceil(height/2);lineNumber++){
    diamond+=delimiter+generateDiamond("*","*","*",lineNumber,height);
    delimiter = "\n";
  }
  for(let lineNumber=Math.ceil(height/2-1);lineNumber>0;lineNumber--){
    diamond+=delimiter+generateDiamond("*","*","*",lineNumber,height);
  }
  return diamond;

}

const validateHeight=function(height){
  if(height%2==0){
    return height-1;
  }
  return height;
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

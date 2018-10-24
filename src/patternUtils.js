const repeatCharacter = function(character,width){
  line="";
  for(let index=0;index<width;index++){
    line+=character;
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


const addSpaces = function(line,width){
  while(line.length<width){
    line =" "+line;
  }
  return line;
}
const validateHeight=function(height){
  if(height%2==0){
    return height-1;
  }
  return height;
} 

exports.repeatCharacter = repeatCharacter;
exports.generateLine = generateLine;
exports.addSpaces = addSpaces;
exports.validateHeight = validateHeight;

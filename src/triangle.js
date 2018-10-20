const repeatCharacter = function(character,width){
    line="";
    for(let index=0;index<width;index++){
      line += character;
    }
    return line;
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

const isRightAlligned=function(triangleType){
  if(triangleType=="right"){
    return true;
  }
  return false;
}
const main = function main(){
  let triangleType = process.argv[2];
  let height = +process.argv[3];
  let isRight = isRightAlligned(triangleType);
  console.log(generateTriangle(isRight,height));
}
main();

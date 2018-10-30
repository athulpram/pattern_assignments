const categorizeRectArgs = function(arguments,index){
  let object= {
    pattern : "rectangle",
    type : arguments[index++],
    width : arguments[index++],
    height : arguments[index++],
    index : index
  };
  return object;
}

const categorizeTriArgs =  function(arguments,index){
  let object= {
    pattern : "triangle",
    type : arguments[index++],
    height : arguments[index++],
    index : index
  };
  return object;
}

const categorizeDiaArgs = function(arguments,index){
  let object= {
    pattern : "diamond",
    type : arguments[index++],
    height : arguments[index++],
    index : index
  };
  return object;
}

const seperateFrom= function(string,character){
  let index = 0;
  while(string[index]!=character){
    index++;
  }
  return {type : string.slice(0,index) , pattern : string.slice(index+1)}
}

const categorizeArguments = function(arguments){
  let index = 0;
  let returnObjects = [];
  argumentTypes = {
    "rectangle" : categorizeRectArgs,
    "triangle" : categorizeTriArgs,
    "diamond" : categorizeDiaArgs
  }
  while(arguments[index]){
    let polygon = seperateFrom(arguments[index],"_");
    arguments[index] = polygon.type;
    arguments.unshift(polygon.pattern);
    returnObjects.push(argumentTypes[polygon.pattern](arguments,index+1));
    index = returnObjects[returnObjects.length-1].index;
  }
  return returnObjects;
}
const repeatCharacter = function(character,width){
  let line="";
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
exports.categorizeArguments = categorizeArguments;

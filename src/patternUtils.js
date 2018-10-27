const categorizeRectArgs = function(arguments,index){
  let object= {
    type : arguments[index++],
    width : arguments[index++],
    height : arguments[index++]
  };
  return object;
}

const categorizeTriArgs =  function(arguments,index){
  let object= {
    type : arguments[index++],
    height : arguments[index++]
  };
  return object;
}

const categorizeDiaArgs = function(arguments,index){
  let object= {
    type : arguments[index++],
    height : arguments[index++]
  };
  return object;
}


const categorizeArguments = function(arguments){
  let index=0;
  let returnObject = {};
  argumentTypes = {
    "rectangle" : categorizeRectArgs,
    "triangle" : categorizeTriArgs,
    "diamond" : categorizeDiaArgs  
  };

  returnObject = argumentTypes[arguments[index++]](arguments,index);
  return returnObject;
};

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

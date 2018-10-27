const categorizeArguments = function(arguments){
  let index=0;
  let returnObject = {};
  argumentTypes = {
    "rectangle" : function(arguments){
      let object= {
        type : arguments[index++],
        width : arguments[index++],
        height : arguments[index++]
      };
      return object;
    },
    "triangle" : function(arguments){
      let object= {
        type : arguments[index++],
        width : arguments[index++],
        height : arguments[index++]
      };
      return object;
    },
    "diamond" : function(arguments){
      let object= {
        type : arguments[index++],
        width : arguments[index++],
        height : arguments[index++]
      };
      return object;
    }
  };
  returnObject = argumentTypes[arguments[index++]](arguments);
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

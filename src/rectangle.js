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
exports.createRectangleOfType=createRectangleOfType;

const {repeatCharacter,
  generateLine,
  addSpaces,
  validateHeight,
  categorizeArguments
}=require("../src/patternUtils.js");

const {deepEqual} = require('assert');
//Test for repeat character function

//test for repeat character using * character and width as 1
deepEqual(repeatCharacter("*",1),"*");

//Test for repeat character using character * and width 2
deepEqual(repeatCharacter("*",2),"**");

//Test for repeat character using character * and width 3
deepEqual(repeatCharacter("*",3),"***");

//Test for repeat character using character * and width 4
deepEqual(repeatCharacter("*",4),"****");

//Test for repeat character using character *  and width 5
deepEqual(repeatCharacter("*",5),"*****");

deepEqual(categorizeArguments(["filled_rectangle",20,7]),[{pattern : "rectangle" ,type : "filled", width : 20, height : 7, index : 3}]);

deepEqual(categorizeArguments(["filled_diamond",7]),[{pattern : "diamond" ,type : "filled",height : 7,index : 2}]);

deepEqual(categorizeArguments(["left_triangle",7]),[{pattern : "triangle" ,type : "left", height : 7, index : 2}]);

deepEqual(categorizeArguments(["filled_rectangle",2,7,"left_triangle",7]),[{pattern : 'rectangle' ,type : "filled", width : 2, height : 7, index : 3},{pattern : "triangle" ,type : "left", height : 7, index : 5}]);
//Test generateLine function using inputs width 1 linenum 1 and left aligned 
deepEqual(generateLine(1,1,false),"*");

//Test generateLine function using inputs width 2 line 2 and left aligned
deepEqual(generateLine(2,2,false),"**");

//Test generateLine function using inputs width 4 line 2 and left aligned
deepEqual(generateLine(4,2,false),"**");

//Test generateLine funtion using inputs width 1 and line 1 and right aliged
deepEqual(generateLine(1,1,true),"*");

//Test generateLine function using inputs width 4 and line 2 and right aligned
deepEqual(generateLine(4,2,true),"  **");

//Test addSpaces function using input Character * and width 1
deepEqual(addSpaces("*",1),"*");
//Test addSpaces function using input Character * and width 2
deepEqual(addSpaces("*",2)," *");
//Test addSpaces function using input Character * and width 3
deepEqual(addSpaces("*",3),"  *");
//Test addSpaces function using input Character * and width 4
deepEqual(addSpaces("*",4),"   *");
//Test addSpaces function using input Character * and width 5
deepEqual(addSpaces("*",5),"    *");

//Test validateHeight Function with input 1
deepEqual(validateHeight(1),1);
//Test validateHeight Function with input 2
deepEqual(validateHeight(2),1);
//Test validateHeight Function with input 3
deepEqual(validateHeight(3),3);
//Test validateHeight Function with input 4
deepEqual(validateHeight(4),3);
//Test validateHeight Function with input 5
deepEqual(validateHeight(5),5);
//Test validateHeight Function with input 6
deepEqual(validateHeight(6),5);

console.log("all Util function tests passed");

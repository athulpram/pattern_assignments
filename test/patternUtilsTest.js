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
  validateHeight}=require("../src/patternUtils.js");

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

//Test for generateFilledRectangle using height as 2 and width as 2
deepEqual(generateFilledRectangle(2,2),"**\n**");

//Test for generateFilledRectangle using height as 2 and width as 3
deepEqual(generateFilledRectangle(2,3),"***\n***");

//Test for generateFilledRectangle using height as 3 and width as 3
deepEqual(generateFilledRectangle(3,3),"***\n***\n***");

//Test for generateFilledRectangle using height as 3 and width as 4
deepEqual(generateFilledRectangle(3,4),"****\n****\n****");

//test for generateFilledRectangle using height as 4 and width as 4
deepEqual(generateFilledRectangle(4,4),"****\n****\n****\n****");


//Test asserts for generateEmptyRectangle 
//Test generateEmptyRectangle using height 2 and width 2
deepEqual(generateEmptyRectangle(2,2),"**\n**");

//Test generateEmptyRectangle using height as 2 and width as 3
deepEqual(generateEmptyRectangle(2,3),"***\n***");

//Test generateEmptyRectangle using height as 3 and width as 3
deepEqual(generateEmptyRectangle(3,3),"***\n* *\n***");

//Test generatEmptyRectangle using height as 3 and width as 4
deepEqual(generateEmptyRectangle(3,4),"****\n*  *\n****");

//test genrateEmptyRectangle using height as 4 and width as 4
deepEqual(generateEmptyRectangle(4,4),"****\n*  *\n*  *\n****");

//test generateAlternatingRectangle using height as 2 and width 2
deepEqual(generateAlternatingRectangle(2,2),"**\n--");

//Test generateAlternatingRectangle using height as 2 and width 3
deepEqual(generateAlternatingRectangle(2,3),"***\n---");

//Test genrateAlternatingRectangle using height as 3 and width as 3
deepEqual(generateAlternatingRectangle(3,3),"***\n---\n***");

//Test generateAlternatingRectangle using height as 3 and height as 4
deepEqual(generateAlternatingRectangle(3,4),"****\n----\n****");

//Test generateAlternatingRectangle using height as 4 and width as 4
deepEqual(generateAlternatingRectangle(4,4),"****\n----\n****\n----");

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

//Test generateTriangle function using inputs left aligned and height 1
deepEqual(generateTriangle(false,1),"*");

//Test generateTriangle with input left aligned and height 2
deepEqual(generateTriangle(false,2),"*\n**");

//Test generate triangle with input left aligned and height 3 
deepEqual(generateTriangle(false,3),"*\n**\n***");

//Test generate tirangle with input right aligned and height 1
deepEqual(generateTriangle(true,1),"*");

//Test genrate triangle with input right aligned and height 2
deepEqual(generateTriangle(true,2)," *\n**");

//Test genrateTriangle with input right aligned and height 3
deepEqual(generateTriangle(true,3),"  *\n **\n***");

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

//Test generateDiamond using inputs all stars and 3 and 5
deepEqual(generateDiamond("*","*","*",3,5),"*****");
//Test generateDiamond using inputs end sides as star and fill with spaces, with width 5 and line as 3
deepEqual(generateDiamond("*","*"," ",3,5),"*   *");
//Test generateDiamond using inputs full stars and 3 and 7 and line as 3
deepEqual(generateDiamond("*","*","*",3,7)," ***** ");
//Test generateDiamond using inputs end sides as star and fill with spaces with width 7 and line as 3
deepEqual(generateDiamond("*","*"," ",3,7)," *   * ");
//Test generateDiamond using inputs end full charaters as star and with width 7 and line as 2
deepEqual(generateDiamond("*","*","*",2,7),"  ***  ");

//Test generateAngledDiamond function using input 3 as height 
deepEqual(generateAngledDiamond(3)," * \n* *\n * ");

//Test generateAngledDiamond function using input 5 as height 
deepEqual(generateAngledDiamond(5),"  *  \n / \\ \n*   *\n \\ / \n  *  ");
//Test generateHollowDiamond function using input 3 as height 
deepEqual(generateHollowDiamond(3)," * \n* *\n * ");

//Test generateHollowDiamond function using input 5 as height 
deepEqual(generateHollowDiamond(5),"  *  \n * * \n*   *\n * * \n  *  ");

//Test generateFilledDiamond function using input 3 as height 
deepEqual(generateFilledDiamond(3)," * \n***\n * ");

//Test generateFilledDiamond function using input 5 as height 
deepEqual(generateFilledDiamond(5),"  *  \n *** \n*****\n *** \n  *  ");

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

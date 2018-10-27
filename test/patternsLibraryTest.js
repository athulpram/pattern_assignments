const {createRectangleOfType,createTriangleOfType,generateDiamondOfType}=require('../src/patternsLibrary.js');
const {deepEqual} = require('assert');

line="********************";
pattern=[line,line,line,line,line,line,line];

//Test cases for rectangle patterns

//Rectangle pattern test with the given input -> filled , wdth - 20 and height - 7
deepEqual(createRectangleOfType("filled",20,7),pattern);

//Rectangle pattern test with the inputs "filled" , width - 1 and height - 2
deepEqual(createRectangleOfType("filled",1,2),["*","*"]);

//rectangle pattern test with the inputs "filled" , width - 2 and height - 2
deepEqual(createRectangleOfType("filled",2,2),["**","**"]);

//rectangle pattern test with the inputs "filed" , width -1 and height -3
deepEqual(createRectangleOfType("filled",1,3),["*","*","*"]);

//rectangle pattern test with the inputs "filled" , width - 3 and height  -3
deepEqual(createRectangleOfType("filled",3,3),["***","***","***"]);

//rectangle pattern test with the inputs "filled", width - 4 and height -2
deepEqual(createRectangleOfType("filled",4,2),["****","****"]);

line="********************";
hline="*                  *";
pattern = [line,hline,hline,hline,hline,hline,line];
//rectangle pattern test with the inputs "emmpty" width as 2 and height as 2
deepEqual(createRectangleOfType("empty",2,2),["**","**"]);

//rectangle pattern test with the inputs "empty" width as 3 and height as 2
deepEqual(createRectangleOfType("empty",3,2),["***","***"]);

//rectangle pattern test with the inputs "empty"width as 3 and height as 3
deepEqual(createRectangleOfType("empty",3,3),["***","* *","***"]);

//rectangle pattern test with the inputs "empty" width as 20 and height as 7
deepEqual(createRectangleOfType("empty",20,7),pattern);

line="******************************";
hline="*                            *";
pattern = [line,hline,hline,hline,hline,hline,hline,line];
deepEqual(createRectangleOfType("empty",30,8),pattern);

//


deepEqual(createRectangleOfType("alternating",2,2),["**","--"]);
deepEqual(createRectangleOfType("alternating",3,2),["***","---"]);
deepEqual(createRectangleOfType("alternating",3,3),["***","---","***"]);
deepEqual(createRectangleOfType("alternating",1,2),["*","-"]);


line="********************";
hline="--------------------";
pattern = [line,hline,line,hline,line,hline,line];
deepEqual(createRectangleOfType("alternating",20,7),pattern);

//-----------------------TRIANGLE-----------------------------

//Triangle pattern of left aligned with height 2
deepEqual(createTriangleOfType("left",2),["*","**"]);

//Triangle pattern of left aligned with height 3
deepEqual(createTriangleOfType("left",3),["*","**","***"]);

//Triangle pattern of left aligned with height 4
deepEqual(createTriangleOfType("left",4),["*","**","***","****"]);

//Triangle pattern of left aligned with height 5
deepEqual(createTriangleOfType("left",5),["*","**","***","****","*****"]);

//Triangle pattern of left aligned with height 6
deepEqual(createTriangleOfType("left",6),["*","**","***","****","*****","******"]);

  //Triangle pattern of right aligned with height 2
deepEqual(createTriangleOfType("right",2),[" *","**"]);

//Triangle pattern of right aligned with height 3
deepEqual(createTriangleOfType("right",3),["  *"," **","***"]);

//Triangle patten of right aligned with height 4
deepEqual(createTriangleOfType("right",4),["   *","  **"," ***","****"]);

//Triangle pattern of right aligned with height 5
deepEqual(createTriangleOfType("right",5),["    *","   **","  ***"," ****","*****"]);

//Triangle pattern of right aligned with height 6
deepEqual(createTriangleOfType("right",6),["     *","    **","   ***","  ****"," *****","******"]);

//Diamond pattern of filled type and height 3
deepEqual(generateDiamondOfType("filled",3),[" * ","***"," * "]);
//Diamond patten of filled type and height 4
deepEqual(generateDiamondOfType("filled",4),[" * ","***"," * "]);
//Diamond pattern of filled type and height 5
deepEqual(generateDiamondOfType("filled",5),["  *  "," *** ","*****"," *** ","  *  "]);
//Diamond pattern of filled type and height 6
deepEqual(generateDiamondOfType("filled",6),["  *  "," *** ","*****"," *** ","  *  "]);
//Daimond pattern of filled type and height 7
deepEqual(generateDiamondOfType("filled",7),["   *   ","  ***  "," ***** ","*******"," ***** ","  ***  ","   *   "]);
//Diamond pattern of filled type and height 8
deepEqual(generateDiamondOfType("filled",8),["   *   ","  ***  "," ***** ","*******"," ***** ","  ***  ","   *   "]);

//Diamond pattern of hollow type and height 3
deepEqual(generateDiamondOfType("hollow",3),[" * ","* *"," * "]);
//Diamond patten of hollow type and height 4
deepEqual(generateDiamondOfType("hollow",4),[" * ","* *"," * "]);
//Diamond pattern of hollow type and height 5
deepEqual(generateDiamondOfType("hollow",5),["  *  "," * * ","*   *"," * * ","  *  "]);
//Diamond pattern of hollow type and height 6
deepEqual(generateDiamondOfType("hollow",6),["  *  "," * * ","*   *"," * * ","  *  "]);
//Daimond pattern of hollow type and height 7
deepEqual(generateDiamondOfType("hollow",7),["   *   ","  * *  "," *   * ","*     *"," *   * ","  * *  ","   *   "]);
//Diamond pattern of hollow type and height 8
deepEqual(generateDiamondOfType("hollow",8),["   *   ","  * *  "," *   * ","*     *"," *   * ","  * *  ","   *   "]);

//Diamond pattern of angled type and height 3
deepEqual(generateDiamondOfType("angled",3),[" * ","* *"," * "]);
//Diamond patten of angled type and height 4
deepEqual(generateDiamondOfType("angled",4),[" * ","* *"," * "]);
//Diamond pattern of angled type and height 5
deepEqual(generateDiamondOfType("angled",5),["  *  "," / \\ ","*   *"," \\ / ","  *  "]);
//Diamond pattern of angled type and height 6
deepEqual(generateDiamondOfType("angled",6),["  *  "," / \\ ","*   *"," \\ / ","  *  "]);
//Daimond pattern of angled type and height 7
deepEqual(generateDiamondOfType("angled",7),["   *   ","  / \\  "," /   \\ ","*     *"," \\   / ","  \\ /  ","   *   "]);
//Diamond pattern of angled type and height 8
deepEqual(generateDiamondOfType("angled",8),["   *   ","  / \\  "," /   \\ ","*     *"," \\   / ","  \\ /  ","   *   "]);


console.log("All tests passed");

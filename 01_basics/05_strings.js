///differnt pattern to write an sting 
let firstName = "vinay";
console.log(firstName);    //output--> vinay

let lastName = "singhal";
console.log(lastName);   //output-->singhal

let char ='a';
let num = '123';
let emp = " ";  //isski lenth 1 hogi { yaha pe ye space character ki taraha kam kar raha hai}
let emp1 = "";  //isski 0 hogi 
let sentence = 'this is "apple" and "banana" for you.'   // aise use kar sakte hai 

//---------->string indices<----------------
///let name = "VINAY SINGHAL";
////consolw.log(name[0]);   //output--> V
////consolw.log(name[6]);   //output--> S


//basic string
const name = "hitesh"
const repoCount = 50

///------------------> template literals start ----------------------->

// -------------> concatenation of srings<----------------------------
 
//--> Example 1;
 console.log(name + repoCount + " Value");  //--> output--> "hitesh50 value"
//NOTE::---> but this is normal syntax this is not recoomended

//NOTE::--> this is recommended syntax("modern way")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//--> output--> "Hello my name is hitesh and my repo count is 50"



//-->Example 2;
let pencilPrice = 10 ;
let erasorPrice =5;

//===>method 1
console.log("the total price is :", pencilPrice + erasorPrice ,"Rupees. ");

//====>method 2  // by declare another varibale
let output = "the total price is :" + (pencilPrice + erasorPrice) + "rupees. ";
console.log(output);

//method 3 // back tick method( template literls)-->> this is the neweest and main method
let output1 = `the total price is : $(pencilPrice + erasorPrice) + rupees. `;

// ---------------------->template literals end------------------------>



//another way to declare string
const gameName = new String('hiteshhc')

// console.log(gameName[0]);  //output--> "h"
// console.log(gameName.__proto__);

// ----------------------------> properties/Methods of string of string<----------------------------

// ##########################11111111111111111111111111111#################################

//------------------------->[.length]{starting}<------------------------
console.log(gameName.length);         // output--> "8"
console.log(gameName[gameName.length]);         
// output--> undefined   ,, reson--> ye 8th index pe jaake dekh raha hai par usspe kuch hai nahi issliye undefined
// aayega..
console.log(gameName[gameName.length-1]);  //output--> c
console.log(gameName[gameName.length-2]);  //output--> h

//------------------------->[.length]{ending}<------------------------

// ##########################11111111111111111111111111111#################################

//console.log(gameName.charAt(2));       //output --> "t"

// ##########################22222222222222222222222222222#################################

// --------------->TRIM METHOD {starting}<---------------------
const newStringOne = "   hitesh    "
console.log(newStringOne);           //output-->"   hitesh  "
console.log(newStringOne.trim());   //output-->"hitesh"
//-->trim method use to remove onlt staritng sapce and end space.
//--> not remove middle space

//--> one more example
let password = prompt("set your password");
let newPassword = password.trim();
console.log(newPassword) 
//input -->  "    abc"
//output--->   "abc"

// --------------->TRIM METHOD {ending }<---------------------

// ##########################22222222222222222222222222222#################################


// ##########################3333333333333333333333333333#################################

// -----------------> toUpperCase & toLowerCase METHOD (starting)<-----------

let flightName1= "airindia";
console.log(gameName.toUpperCase());  //output--> "AIRINDIA"

let flightName = "AIRINDIA";
console.log(flightName.toLowerCase());  //output--> "airindia"

// -----------------> toUpperCase METHOD (ending)<-----------   

// ##########################3333333333333333333333333333#################################

// ##########################4444444444444444444444444444#################################

// =====================>STRING METHOD WITH ARGUMENTS<====================

// ------------->INDEXOF(indexOf) method {starting}<--------------
let msg = "ILoveCoding";

console.log(msg.indexOf("I"));      //output--> 0
console.log(msg.indexOf("Love"));   //output--> 1
console.log(msg.indexOf("love"));   //output--> -1(not found)
console.log(msg.indexOf("z"));      //output--> -1(not found)
console.log(msg.indexOf("C"));      //output --> 5

//console.log(gameName.indexOf('t'));    //output --> "2"

// ------------->INDEXOF(indexOf) method {ending}<--------------

// ##########################4444444444444444444444444444#################################


// ##########################555555555555555555555555555#################################
//------------------------>SLICE METHOD{starting}<---------------------
let msg1 = "hello";
console.log(msg1.slice(0, 4));   //output--->hell

let msg2 = "apnacollege";
console.log(msg2.slice(4,11));             //output--->college
console.log(msg2.slice(4, msg2.length));   //output--->college
console.log(msg2.slice(4));                //output---> college

//slice ke andar negative value bhi pass kar sakte hai
//-->str.slice(-value) => str.slice(length-val)

console.log(msg2.slice(-2));     // {string length - 2}=>{11-2}=9 
                                 //-->output => ge

 console.log(msg2.slice(-1));     // {string length - 1}=>{11-1}=10
                                 //-->output => e


// ---> there is a substring which is also same as slice but it not support the negative value and slice method is more use then this
const newString = gameName.substring(0, 4)
console.log(newString);    //output---> "hite"

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);   // output--> hite

//------------------------>SLICE METHOD{ending}<---------------------

// ##########################555555555555555555555555555#################################



//----> used to changes in url
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))   //output-->"https://hitesh.com/hitesh-choudhary"

console.log(url.includes('hitesh'))    //output--> "true"

console.log(url.includes('sundar'))    //output---> "false"

console.log(gameName.split('-'));      //output---> [ 'hitesh', 'hc' ]


//-------------------------->Method CHANING {starting}<--------------------------

let msg3 = "  hello  "
let newMsg = msg3.trim().toUpperCase();
console.log(newMsg);    ///output ---> HELLo

//-------------------------->Method CHANING {ending}<--------------------------

//--------------------------->REPLACE METHOD <<<<<<<<<<starting
let msg5 = "IloveCoding";

let out = msg5.replace("I", "o");
console.log(out);       //output---> oloveCoding

let out1 = msg5.replace("love", "do");
console.log(out1);       //output---> IdoCoding

let out2 = msg5.replace("I", "o");
console.log(out2);       //output---> oloveCoding

//--------------------------->REPLACE METHOD <<<<<<<<<<ending


// ------------------------>REPEAT METHOD------------>starting
let str3 = "Mango";

console.log(str3.repeat(3));
// ------------------------>REPEAT METHOD------------>ending
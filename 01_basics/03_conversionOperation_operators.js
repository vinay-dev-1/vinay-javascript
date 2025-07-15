let score = "hitesh"

// -->to find the type 
// console.log(typeof score);    //output-->string
// console.log(typeof(score));   //output-->string


//type coversion 
//convert into number 
let valueInNumber = Number(score)
console.log(typeof valueInNumber);   //output-->number  ===>number me convert ho jayega 
console.log(valueInNumber);  //output--> NaN  ===> but jaruri nahi hai vo number me change kar de 

// exaample of number conversion
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// "vinay" => NaN
 
//covert into boolean
let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);
//output --> true

//example of number conversion
// 1 => true; 0 => false
// "" => false
// "hitesh" => true


//covert into string 
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);  //output--> 33
// console.log(typeof stringNumber);    //output--->string



//==> convert by using unary +   operator --> works on variables
let  a = '123' ;
console.log(+a);  //output-->  123 {its change to number}

let b = '123vinay';
console.log(+b);    //output---> NaN


//also we can covert using parseFloat and parseInt
console.log(parseInt('12345'));  //output--> 12345
console.log(parseInt('12345f'));   //output--> 12345
console.log(parseInt('123f4'));   //output--> 123
//these give proper number

//but in number it give differnt output
console.log(Number('12345f'));    //output --> NaN
//this not give proper number

//also in parseInt there is a condtion to start from numberif not then its also react like a number datatype
console.log(parseInt('f1234'));     //output-->NaN


// *********************** Operations/operators***********************

let value = 3
let negValue = -value
console.log(negValue);     //output---> -3



//-----------> airthmetic operators <---------------------
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);


//simply add string
let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);      //output--> hello hitesh 


//adding the string with differnt datatype
//console.log("1" + 2);  //output--> 12
//console.log(1 + "2");  //12
//console.log("1" + 2 + 2);  //122
//console.log(1 + 2 + "2");  //32
//console.log( (3 + 4) * 5 % 3); //bodmas rule



// -->unary opertor
//prefix and postfix    or  //preincreament and postincreament
let gameCounter = 100
++gameCounter;
// console.log(gameCounter);   //output--> 101

let gameCounter1 = 100
gameCounter1++;
// console.log(gameCounter1);   //output--> 101





// ------------>LOGICAL OPERATORS  STARTING<----------------
//--> real life example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//---> LOGICAL AND"&&""
if (userLoggedIn && debitCard && 2==3) {
    // console.log("Allow to buy course");
}
//iff all the condtion are true that code execute 


// ----------->LOGICAL OR "||"
if (loggedInFromGoogle || loggedInFromEmail) {
    // console.log("User logged in");
}
//iff any one condition is true then code execute




//--> SOME MORE EXAMPLE
let marks = 90;
//logical AND
if (marks>=33 && marks >=80){
     console.log("pass");
     console.log("A+");
 }

// //logical OR
if (marks>=33 || marks >=80){
    console.log("pass");
    console.log("A+");
}


//logical not
if(!marks <33){
    console.log("pass");
    console.log("A+");
}

// --------------->LOGICAL OPEATOR ENDING<----------------


// -------------->ternary operator<--------------
let num1 = 10;
let num2 = 19;
let num3 = 21;
let greater = num1 > num2 ? num1 : num2;
let greater1 = num1 > num2 ? num1 > num3 ? num1 : num3 : num2 > num3 ? num2 : num3 ;
console.log(`Greater number is ${greater}`);
console.log(`Greater number is ${greater1}`);


// question--> correct syntax to find which number is greater or holds equality among the two numbers?
// ans-->
let val1 = 25;
let val2 = 26;

let big = val1 > val2 ? val1 : val2 === val1 ? "equal" : val2;
console.log(big); 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion




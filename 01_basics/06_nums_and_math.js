const score = 400
// console.log(score);       //output--> 400

//explictly number type bataya hai ya define kiya hai  
const balance = new Number(100)
// console.log(balance);      //output-->  [Number: 100]


//explicitly convert into string 
// console.log(balance.toString().length);     //--> number string me change go gaya hai to isspe string ki property apply ho sakti hai      //output=====> 3

// console.log(balance.toFixed(1));   output--> 100.0
// console.log(balance.toFixed(2));   output--> 100.00
// console.log(balance.toFixed(3));   output--> 100.000


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));   //output---> 124

const otherNumber1 = 23.8966
console.log(otherNumber.toPrecision(3));   //output---> 23.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));    //output---> 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));      output-----> 4 //gives absolute number
// console.log(Math.round(4.3));   output--->4
// console.log(Math.round(4.6));   output--->5
// console.log(Math.ceil(4.2));    output--->5   --> top{round of to the nearest biggest integer}
// console.log(Math.floor(4.9));   output---->4  -->down{round of to nearest smallest integer value}
// console.log(Math.min(4, 3, 6, 8));  output--> 3
// console.log(Math.max(4, 3, 6, 8));   8
// console.log(Math.pow(2,4));      output--> 16

console.log(Math.random());  //--->gives random value but its always between 0 and 1.


// generate random between a specific range
// step1;  {it generates a random number [range 0 to 1] between 0 and 1}
let num = Math.random();
console.log(num);    //outputs--> gives a random number 

//step2;  {multiply that number by 10}
let num2 = num * 10;
console.log(num2);   //ouutput--> gives a number that multiply (randomnumber with 10)

//step3;  {floor that num2}
let num3 = Math.floor(num2);
console.log(num3);   //output--> give num3 with using floor with num2

// step4 {ye range 0 to 9 se--> 1 to 10 bana deta hai }
num4 = num3 + 1;
console.log(num4);   //output-->finally gives a output with range 1 to 10 of random number


//ek saath bhi likh sakte hai
console.log((Math.random()*10) + 1);  
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser so browser me pop up ke liye use aata hai node js me differnt syntax hai


let name = "hitesh";      //string data type
let age = 18;             //number data type
let weight = 95.67;       //number data type
let isLoggedIn = false;   //boolean data type
let state;                
 

// ranges of data type
// number => 2 to power 53
// bigint  //for  very big number
// string => ""
// boolean => true/false
// null => standalone value  
// undefined => value not defined 
// symbol => unique


// object
//later we study more 
//but remember
//-->Everything in javascript isactuaaly an object


console.log(typeof undefined); // undefined
console.log(typeof null); // object


//---> some interesting about datatype
console.log(Number.MAX_VALUE);    //output-->1.7976931348623157e+308
console.log(Number.MIN_VALUE);    //output--->5e-324
console.log(Number.MAX_VALUE * 10);   //output-->infinity


//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

//const isLoggedIn = false/true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // not eqaul give output false 

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

//Array 
const heros = ["shaktiman", "naagraj", "doga"];

//Object
let myObj = {
    name: "hitesh",
    age: 22,
}
//--> how to increase age 
myObj["age"]=myObj["age"]+1;
//change name
myObj["name"]= "vinay singhal";

//function
const myFunction = function(){
    console.log("Hello world");
}



console.log(typeof anotherId);



// return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// https://262.ecma-international.org/5.1/#sec-11.4.3
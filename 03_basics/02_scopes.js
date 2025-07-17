/**********function scope */
/*-->variable defined inside a function are not accesible (visible) from outside the function*/

//==>For Example 1-->
/****************************************************************************** */
function calSum(a,b){
    let sum = a+b;
}
calSum(1,2)
console.log(sum);
//it is not accessible because sum variable define inside a function . its not print anything

/*BUT IF */
function calSum1(a,b){
    let sum = a+b;
    console.log(sum);  //it gives output because it in scope
}
calSum1(1,2)

// ***remember
let sum1 = 54;   //global scope--> its can use everywhere where we want to use
function calSum2(a,b){
    let sum1 = a+b  // function scope--> this is use only in function
    console.log(sum1); //function scope vala sum use hoga ==>3   //kyuki vo closest
}
calSum2(1,2);
console.log(sum1);  //-->global scope vala sum print hoga ==> 54

//****remember */
let sum2 = 54;
function calSum3(a,b){
    console.log(sum2);   //output-->54 
    //beacause if sum is not declare in function scope then the global scope sum use
}
/**************************************************************************** */

//======>BLOCK scope 
/*
=>Before ES6 (2015), JavaScript variables had only Global Scope and Function Scope.
=>ES6 introduced two important new JavaScript keywords: let and const.
=>These two keywords provide Block Scope in JavaScript.
Variables declared inside a { } block cannot be accessed from outside the block:
*/
//-->Example
{
  let x = 2;
}
// x can NOT be used here

//--->Example
{
  var x = 2;
}
// x CAN be used here
/*Variables declared with the var keyword can NOT have block scope.
  Variables declared inside a { } block can be accessed from outside the block.
*/

//--->Example
for(let i=1; i<=5; i++){
    console.log(i); //block scope
    //execute and give output {1, 2, 3, 4, 5} 
}
console.log(i); //not execute because i is not defined here


//-->Example
if (true) {
    let a = 10
    const b = 20
    var c = 30
}
console.log(a);  // a is not define -->error
console.log(b);  // b is not define --->error
console.log(c);  // c is not define but its declare with var keyword so its print executes and prints --> 30


//-->Example-->
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30;
}
console.log(c);  //output-->30 --> there is problem started . here user give globally var c=300 but in console.log take var c=30 because var is not block scoped 
//-->so here  problem started thats why {let and const introduce for blocked scoped}

var c = 300
let a = 400;
if (true) {
    let a = 10
    console.log("INNER", a)   //output--> 10 {becasue here a is declare in block scope and also it is nearest so priority is high}
    const b = 20
    var c = 30;
}
console.log(c);  //output-->30
console.log("OUTER", a);  //output--> 400 {this is right as expected beause let is blocked scope it not take "a=20" {because this is in a block}



//==>Lexical Scope {bascically uses in a  nested function concept}
//--> A variable defined outside a function can be accessible inside another function  defined after the variable decleration
//But Opposite is not true  

//-->Example
function outerFunc1() {
    let x = 5;
    let y = 6;
    function innerFunc1(){
        console.log(x);
    }

    innerFunc1();
}
outerFunc1();
//output--> 5 
// this is possible becuase child function can access the value of x from parent function 


//--->Example
function outerFunc2() {
    let x = 5;
    let y = 6;
    function innerFunc2(){
        let a = 10;
    }
    console.log(a);   //not possible

    innerFunc2();
}
outerFunc2();
//output--> error: a is not defined
//becasue variable define in child function that cannot be access by parent function


//--> remember*****
function outerFunc3() {
    let x = 5;
    let y = 6;
    function innerFunc3(){
        let a = 10;
    }
    console.log(a);   //not possible

    innerFunc3();
}
outerFunc3();
//output--> error: a is not defined
//becasue variable define in child function that cannot be access by parent function
innerFunc3(); 
// output--> error:innerFunc not defined
//reason:--> because the innerFunc2() is functin scope so its no posssible to access outside the outerFunc(); 


// lexical ko if-else ke andar bhi try kar sakte hai
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);  -->hitesh youtube
    }
    // console.log(website); //-->error
}
// console.log(username); //-->error


// ++++++++++++++++++ interesting ++++++++++++++++++

//-->Example
//normal function decleration
console.log(addone(5))  //--> output--> 6
//no error pass becasue function ko kahi se bhi call karo its works
function addone(num){
    return num + 1
}

//-->Example
console.log(addTwo(5)) //--> output-->error
//there is some error because if function declare with function expresssion means the function is stored in variable 
//so now only after declare you can call a function
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)); //-->output->7 {no error found}

//==>now see what is function expression
// ***Function Expression -->"to define a function with storing in a variable
let sum = function(a,b) {
    return a+b;
}
//now function ko pass karne ki jagaha varible ko pass karnege jaha vo store hai
sum(1,2);   //output-->3


/*********HIGHER ORDER FUNCTION*************** */

//==>A Higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

/****************************************************************** */
// ==>1st --> takes one or multiple functions as arguments

function multipleGreet(func, count){   //higher order function
    for(let i=1; i<=count; i++){
        func(); //calling fucntion again and again till the right
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet, 1000);  //function pass kiya hai hai ,and, count ki value
//output--> 1000 baar greet function execute hoga

//also we direct pass function
multipleGreet(function(){ console.log("namaste")}, 1000);
//output--> 1000 times namaste print hoga
/******************************************************************** */

// -->2nd--> Returns a function

//-->Example
// function oddOrEvenFactory(request) {
//     if(request == "odd") {
//         let odd = function(n) {
//             console.log((!(n%2 == 0)));
//         }

//         return odd;
//     } else if(request == "even"){
//         let even = function(n){
//              console.log(n%2==0);
//         }

//         return even;
//     }else {
//         console.log("wrong request");
//     }
// }

// let request1 = "odd";
// let func1 = oddOrEvenFactory(request1);
// console.log(func1(5));    //true


// let request2 = "even";
// let func2 = oddOrEvenFactory(request2);
// console.log(func2(4));    //true

//another way to write the example of factory function
function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log((!(n%2 == 0)));
        }
    } else if(request == "even"){
        return function(n){
             console.log(n%2==0);
        }
    }else {
        console.log("wrong request");
    }
}

let request1 = "odd";
let func1 = oddOrEvenFactory(request1);
console.log(func1(5));    //true


let request2 = "even";
let func2 = oddOrEvenFactory(request2);
console.log(func2(4));    //true
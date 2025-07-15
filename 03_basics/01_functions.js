// Functions===>
// A function in JavaScript is a block of code that performs a specific task. 
// It takes inputs (parameters) and returns a value or performs an action.
//function is a reusuable code that might be use again and again


// # EXAMPLE 1/********creating or defining a function(telling js)*********/
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
/****function calling or invoke function*******/
sayMyName();   //output--> H  I  T  E  S  H


// # EXAMPLE 2/********function definition(telling js)*********/
function print1to5() {
   for(let i=1; i<=5; i++){
    console.log(i);
   }
}
/****function calling*******/
print1to5();    //output--> 1  2  3  4  5


// # EXAMPLE 3/********function definition(telling js)*********/
function isAdult() {
   let age = 18;
   if(age>=18){
    console.log("adult")
   }
   else{
    console.log("not adult")
   }
}
/****function calling*******/
isAdult();    //output--> adult



//*******Functions with arguments **************************************************/
/****Example1 --> add two numbers */
/************************************************************************ */
//------------------->(parameter1, parameter2)
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
// ---------(arg1, arg2)
addTwoNumbers(2,4);       
//output--> 6


//-->same example with differnt approac{storing function call in a varible}
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
//-->store a function in variable 
const result = addTwoNumbers(2, 4);
//output--> 6{same as previous}

// -->but if we want to acces the result value or print the result value
console.log("Result", result);
//--> it gives undefined 
//-->undefined issliye aayega ki vo koi value return nahi kar raha hai abhi
//vo sirf console.log kar raha hai 

//---> so aab issme function return karwyenege
function addTwoNumbers(number1, number2){
    //**method 1 */
    let result = number1 + number2
    // return result
    // ** method 2/
    return number1 + number2
}
//-->store a function in variable
const result1 = addTwoNumbers(3, 5)
console.log("Result: ", result);
// --> now it return result value -- >8

/********************************************************************** */


// ****Example 2==>
    function printInfo(name,age){
        console.log(`${name}'s age is ${age}`)
    }
    printInfo("Vinay", 21); //output--> vinay's age is 21
    printInfo("aman"); // agar age parameter pass nahi hua to ye output
    //output--> aman's age is undefined

    //but if
    printInfo(21)   //output-->21's age is undefined 
    //this is because paramter pass by order 
    /*so start ke paramter pass karke last vale nahi karo to output expected aayega .but last ke parameters pass karke start ke nahi kare to unexpected output aayega*/

/******************************************************** */


//==>some more about return keyword

// example-->
function sum(a,b) {
    return a+b;
    //issne value return kar di
}
sum(3, 4); //sum function ke pass bhi vo value aa gayi
////ye value return karega par print nahi karega kyuki usse log nahi kiya

//-->print karane ke liye
let s = sum(3,4);
console.log(s);  //print ho jayega

//ese bhi kar sakte hai
console.log(sum(3,4));


//**if we do sum of 3 numbers by using same function() */
sum(sum(1,2),3) ;    //note--> sum ke andar sum function ko call lar diya
console.log(sum(sum(1,2),3));  //output-->6








//if user not pass any value
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
//output--> please  enter a username
//          undefined


// another syntax
function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//output--> please enter a usernaem


//give user some defualt value like "sam"
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())  //--> output--> sam{agar aise default
// value denge to kabhi bhi undefined nahi hogi minimum se minimum "sam" hogi}
// console.log(loginUserMessage("hitesh")) //-->output-->hitesh  {sam ko overwrite kar dega ye}


//when we don,t know how many arguments pass
// "..." issko rest operatror bhi bolte hai aur spread operator bhi
//and isske use case ke upar depend karta hai kab spread bolenge kab rest bolenge
//for now we take this as rest -->
//isska matlab hai yaha jitna bhi item mil raha vo spread hai ussko ek saath collect kar leta hai
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))



//--->how to pass an object in function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

//direct object bhi pass kar sakte hai
handleObject({
    username: "sam",
    price: 399
})


//how we pass array
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

//direct nhi pass kar sakte hai
console.log(returnSecondValue([200, 400, 500, 1000]));
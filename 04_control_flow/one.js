// if
const isUserloggedIn = true
const temperature = 41

// ---> if else
if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

//comparision operators
// <, >, <=, >=, ==, !=, ===, !==


// if using scope 
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);   //output--> user power: fly
}
console.log(`User power: ${power}`); //output--> through an error because it out of the scope and power is undefined here 


//---> this is like a shorthand but this is not a good practise
// const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");


//------------> else if statement start<---------------------
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");
// }

// --------------->else if statement end<----------------


//------------------->nested if-else start<-----------------
let marks = 45 ;

if(marks >=33) {
    console.log("pass");
    if(marks >= 80){
        console.log("Grade: 0");
    }else{
        console.log("Grade: A");
    }
}else{
    console.log("better luck next time!");
}

 


//--> real life example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

//---> LOGICAL AND"&&""
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");    
}
//iff all the condtion are true that code execute 


// ----------->LOGICAL OR "||"
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
//iff any one condition is true then code execute









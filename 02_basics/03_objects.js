// --> to declare a object we have 2 method 
//--> 1st is literal & 2nd is constructor 

// singleton ----> koi bhi constructor se banate hai to singleton object banta hai
//means ye apne app me ek hi object hai
//only remeber this --> agar literals ki tarha declare karte hai to singleton nahi banta hai
// Object.create --> construct method to create object 



// **************object literals

const mySym = Symbol("key1")  //symbol define kiye hai

//object 

const JsUser = {

    //object ke andar key value pair hote hai
    name: "Hitesh",           //property of object 
    "full name": "Hitesh Choudhary",       
    [mySym]: "mykey1",    //symbol ko object me pass karne ka tarika as key-value pair
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] //possible to store array as key value pair
}

//---> now see how we access data after store in object or key from object 

//not such a good pratise but not proper bad
// console.log(JsUser.email)

//mainly we use this method to acces key
// console.log(JsUser["email"])   
// console.log(JsUser["full name"])  //in this key we are not able to use "." 
// console.log(JsUser[mySym])


// -->some more point about "Get value"
// ==> JS automatically converts objects keys to strings.
// ==> Even if we made the number as a key,the number  will be converted to string.
// -->for Example->
   const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
   };// here number,true,null,undefined all are treated as string 

   //here if we acces these
   console.log(obj[1]);  //here 1 is first covnverted to strig then print the value to 1
   


// **********ADD/UPDATE value
//--> to update any key value
JsUser.email = "hitesh@chatgpt.com";

//--> to add any key value
JsUser.gender = "male";

//--> to delete any key
delete JsUser.gender;

//-->to freeze an object 
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);
//error nahi aayega but value not changes because of freeze


//--> to add a function as key 
JsUser.greeting = function(){
    console.log("Hello JS user"); 
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  //this use to refrence object
}

console.log(JsUser.greeting());  //output--> Hello JS user
console.log(JsUser.greetingTwo()); //output--> Hello JS user, Hitesh


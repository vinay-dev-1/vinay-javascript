//----> some examples of trurthy value and falsy value start <----------------------
const userEmail = "vinaysinghal.se@gmail.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//output --> Got user email   //--> truthy value

//                          --------------------

const userEmail1 = "";   //empty string 

if (userEmail1) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//output --> Don't have user email   //--> falsy value

//                            -----------------------

const userEmail2 = []    //empty array

if (userEmail2) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
//output --> Got user email   //--> truthy value

//                         -----------------------



// --------------->>>>> falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//---------------->>>>>truthy values
// "0", 'false', " ", [], {}, function(){}


//--> array agar empty aa gaye to ussko check karne ka tarika
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//--> agar object empty aa gaye to ussko check karne ka tarika 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): {null,undefined}--> issme only null and undedfined ke upar hi dekenege 

let val1;
// val1 = 5 ?? 10           //output --> 5
// val1 = null ?? 10        //output--> 10
// val1 = undefined ?? 15   //output--> 15
val1 = null ?? 10 ?? 20     
console.log(val1);          //output--> 10

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")



//---> extra concept with truty value and fasly value
//short circuit 
//--> 1st. [&& short circuit]
console.log(3 && 4 && 5 && 0 && 7 && NaN)  //output--> 0
//if any falsy value come then its check not further 
//like here 0 come fist so its print 0 becuase in && the fist falsy value print.
console.log((3 && 4 && 5 && 8 && 7 && NaN))  //output--> NaN

console.log((3 && 4 && 5 && 8 && 7 && 8))    //output--> true
//becuase if all are true it print last truthy value


//-->2nd [ || short circuit ]
console.log(0 || null || undefined || false || NaN)  //output--> NaN
//it returns the last falsy value

console.log(0 || "string" || undefined || false || NaN) //output-->string
//it returns the first truthy
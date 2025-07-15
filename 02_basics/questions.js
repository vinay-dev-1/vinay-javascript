// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0, -2] and n=3
// Print, [7, 9, 0]

// Ans-->
let array = [7, 9, 0, -2];
let n = 3;

let newArray = array.splice(0,3);
console.log(newArray);



// Qs2. Write a JavaScript program to check whether a string is blank or not.
let str = prompt("enter any string");

if(str.length == 0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}




// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

//--> ans
let str1 = "ApNaCoLlEgE"
let idx = 3
if(str1[idx] == str1[idx].toLowerCase()){
    console.log("chacter is lowercase ");
}
else{
    console.log("chacter is upper case");
}



// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string

// ---> ans
let str3 = prompt("please enter a string");
console.log(`original string = ${str3}`);
console.log(`string without spaces = ${str3.trim()}`);


// Qs6. Write a JavaScript program to check if an element exists in an array or not

// ans--->
let arr = [1, 3, 6, 7, 8];
let num = 7;

if(arr.indexOf(num) != -1){
    console.log("present");
}
else{
    console.log("not present");
}



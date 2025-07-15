// ==>Question 1-->create a function to roll a dice & alwyas display the value of the dice (1 to 6).


function diceRandomNumber(){
    let randomnumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomnumber)
}

diceRandomNumber();  


//==> Question 2--> create a Function that gives the average of 3 numbers.

function averageOfThreeNumbers(a,b,c){
    let average = (a+b+c)/3;
    console.log(average);
}

averageOfThreeNumbers(4,5,8);


//==> Question 3--> create a Function that prints the multiplication table of a number

function multiplicationTable(num){
    for(let i=1; i<=num*10; i+=num){
        console.log(i)
    }
}
multiplicationTable(5);    //output--> 5 10 15 20 25 30 35 40 45 50 



//====> Question 4-->create a Function that returns the sum of numbers from 1  to n.
let n;
function returnValueFrom1toN(n){
    let count = 0;
    for(let i = 1 ; i<=n ; i++ ){
        count=count+i;
    }
    return count;
}
const value = returnValueFrom1toN(n);
console.log(value);


//==>Question- 5 --> Create a Function that returns the concatenation of all strings  in an array

let str = ["hi", "hello", "bye", "!"];

function concat(str){
    let result = "";

    for(let i=0; i<str.length; i++){
        result = result+str[i];
    }

    return result;
}

console.log(concat(str));
//output-->hihellobye!


//Question-6--> What will be the output?
let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();


//assignments questions ******
// --> Question 1: 
// Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [3, 4, 6, 8, 9, 1, 7, 10];
let num = 5;

function getElements(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            console.log(arr[i]);
        }
    }
}

let answer = getElements(arr, num);
console.log(answer);
//output--> 6 8 9 7 10



//-->Question 2:-->
/*Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
ans = “abcdefgh” */



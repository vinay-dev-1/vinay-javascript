// array
//==>In JavaScript, an array is a collection of data values of any data type. Arrays are a fundamental data structure and are used to store and manipulate data
//--> in javascript array are hetrogenous{beacuse it stores any data type value in a single element}
//--> but in another language like java or c++ it is homogenous


// NOTE********
// $$$ Arrays in JavaScript are mutable. This means their content can be changed after they are created. You can add, remove, or modify elements within an array without creating a new array in memory.

//=======================>declartion of array<=======================START
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

//--->mixed array with different datatype  {hetrogenous}
let info = ["vinay","hemant", 25, 6.3,];  //mixed array

//array can be created like that also using "new" keyword
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//empty array
let newArr1 = [];

//print array element by indices or access by indices number
console.log(myArr[1]);     //output-->1
console.log(myArr[4]);     //output-->4

//indices ke andar indices 
console.log(info[0][0]);    //output-->v
console.log(info[0][1]);    //output-->i

//want to change any value
info[0] = 'gaurav';
console.log(info);    //output--> [ 'gaurav', 'hemant', 25, 6.3 ]

//=======================>declartion of array<=======================END

// ====================> Array methods<============================START

//--->1st---> .length method<-------------
console.log(info.length);    //output--> 4
console.log(newArr1.length);   //output-->0

//we also find direct array length
console.log([1, 2, 4, 6].length);     //output--->4



// ----2nd--------->Push and Pop meths<-------------
//==> push {add to end}
let myArr5 = [2, 4, 5, 7];
myArr5.push(6)   
console.log(myArr5);    //output---> [2, 4, 5, 7, 6]; 
myArr5.push(7);
console.log(myArr5);    //output---> [2, 4, 5, 7, 6, 7]; 
let cars = ["audi", "bmw", "xuv", "maruti"];
cars.push("toyota");
console.log(cars);    //output--> ["audi", "bmw", "xuv", "maruti", "toyota"];


/**********one intersting thing******************* */
const teams = ['csk', 'rcb', 'mi', 'dc'];
const pushArray = teams.push('GT');
console.log(pushArray); //output--> it actually returns the length of the araay after push the data.


//==>pop {delete from end & retrun it}
let myArr6 = [2, 4, 5, 7];
myArr6.pop()
console.log(myArr6);    //output---> [2, 4, 5]; 


// ------3rd--------------->shift and unshift method<---------------
// ==>unshift--> {add to the start}
let cars2 = ["audi", "bmw", "xuv"];
cars2.unshift("toyota")
console.log(cars2);     //output--> ["toyota", "audi", "bmw", "xuv"];

//==>shift--> {delete from start and return it}
cars2.shift("toyota");
console.log(cars2);     //output-->["audi", "bmw", "xuv"];


// ------4th----------------->{(indexOf) & (include)} method <-------------------
//----> indexOf --> returns index of something
let cars6 = ["bmw", "audi", "xuv", "maruti"];
console.log(cars6.indexOf("bmw"));    //output-->0   //-->present
console.log(cars6.indexOf("xuv"));    //output-->2  //-->present
console.log(cars6.indexOf("XUV"));    //output-->  -1   //-->not present
console.log(cars6.indexOf("lamborgini"));    //output--> -1   //-->not present

//----> include--> search for a value
let cars7 = ["bmw", "audi", "xuv", "maruti"];
console.log(cars7.includes("bmw"));    //output-->true   //-->present
console.log(cars7.includes("xuv"));    //output-->true  //-->present
console.log(cars7.includes("XUV"));    //output-->false   //-->not present
console.log(cars7.includes("lamborgini"));    //output-->false   //-->not present

// -------5th--------------------->slice method<----------------------------------
//--->NOTE:: slice method not make changes to the original array .its take copies
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors.slice());   //-->as it is colors array print beacuse no argument given
// output--> [ 'red', 'yellow', 'blue', 'orange', 'pink', 'white' ]
console.log(colors.slice(2));   //output-->[ 'blue', 'orange', 'pink', 'white' ]
console.log(colors.slice(2, 3));   //output-->[ 'blue']
console.log(colors.slice(-2));     //output-->['pink', 'white']
console.log(colors.slice(colors.length-1));   //output--> white


// ---------------------------->concat method<---------------------------
//--->NOTE:: concat method not change in original array itst take copies
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
 
let final = primary.concat(secondary);
console.log(final);     //output-->[ 'red', 'yellow', 'blue', 'orange', 'green', 'violet' ]

let final2 = secondary.concat(primary);
console.log(final2);    //output--->[ 'orange', 'green', 'violet', 'red', 'yellow', 'blue' ]


// ---------------------------->reverse method<------------------------------------
let primary1 = ["red", "yellow", "blue"];
let secondary1 = ["orange", "green", "violet"];
 
let final3 = primary1.reverse();
console.log(final3);               //output----> [ 'blue', 'yellow', 'red' ]

let final4 = primary1.reverse();
console.log(final4);               //output----> [ 'red', 'yellow', 'blue' ]





// ----------------------------->splice method<---------------------------*****START*******8
//--> formula---> .splice(start, deletecount, item0-itemN)
//NOTE: its change in original array 
let colors3 = ["red", "green", "blue", "voilet", "pink", "orange"];

console.log(colors3.splice(4));   //output--> [ 'pink', 'orange' ]

//splice original array me change karta hai copy nahi leta so aab colors print karaker dekte hai
console.log(colors3);    //output-->[ 'red', 'green', 'blue', 'voilet' ]

console.log(colors3.splice(0, 1));    //output-->[ 'red' ]

//--> again colors3 print me bhi original me change ho jayega array will be
console.log(colors3);        // output-->[ 'green', 'blue', 'voilet' ]

console.log(colors3.splice(0, 1, "black", "grey" ));    //output-->[ 'green' ]

//now original array will be
console.log(colors3);            //output-->[ 'black', 'grey', 'blue', 'voilet' ]



// --->more example
let cars8 = ["bmw", "mercedes", "ferari", "suv", "maruti"];

console.log(cars8.splice(1,1,"ferari"));    //output--->[ 'mercedes' ]
console.log(cars8);            //output--->[ 'bmw', 'ferari', 'ferari', 'suv', 'maruti' ]
 

// ----------------------------->splice method<---------------------------*****END*******


// ------------------------------>sort an array <-----------------------------------
//===>sort an array in ascendng order
let days = ["monday", "sunday", "wednesday", "tuesday"];
console.log(days.sort());          //output--->[ 'monday', 'sunday', 'tuesday', 'wednesday' ]


let squares = [25, 16, 4, 49, 36, 9];
console.log(squares.sort());      //output---->[ 16, 25, 36, 4, 49, 9 ]  //not proper work 



//------------------------->nested array<------------------------
let nums = [[2, 4], [3, 6], [4,8]];

console.log(nums);                //output-->[ [ 2, 4 ], [ 3, 6 ], [ 4, 8 ] ]
console.log(nums.length);         //output-->3
console.log(nums[0]);             //output-->[ 2, 4 ]
console.log(nums[0].length);      //output-->2
console.log(nums[0][0]);          //output-->2
 


// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

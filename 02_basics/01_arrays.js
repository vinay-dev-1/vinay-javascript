// array
//=======================>declartion of array<=======================START
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

//print array element by indices
console.log(myArr[1]);     //output-->1
console.log(myArr[4]);     //output-->4

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

//--->mixed array with different datatype
let info = ["vinay","hemant", 25, 6.3,];  //mixed array

//empty array
let newArr1 = [];

//indices ke andar indices 
console.log(info[0][0]);    //output-->v
console.log(info[0][1]);    //output-->i

//=======================>declartion of array<=======================END

// ====================> Array methods<============================START

//--->1st---> .length method<-------------
console.log(info.length);    //output--> 4
console.log(newArr1.length);   //output-->0

//we also find direct array length
console.log([1, 2, 4, 6].length);     //output--->4



// ------------->Push and Pop meths<-------------
//==> pop {add to end}
let myArr5 = [2, 4, 5, 7];
myArr5.push(6)   
console.log(myArr5);    //output---> [2, 4, 5, 7, 6]; 
myArr5.push(7);
console.log(myArr5);    //output---> [2, 4, 5, 7, 6, 7]; 

let cars = ["audi", "bmw", "xuv", "maruti"];
cars.push("toyota");
console.log(cars);    //output--> ["audi", "bmw", "xuv", "maruti", "toyota"];

//==>pop {delete from end & retrun it}
let myArr6 = [2, 4, 5, 7];
myArr6.pop()
console.log(myArr6);    //output---> [2, 4, 5]; 


// --------------------->shift and unshift method<---------------
// ==>unshift--> {add to the start}
let cars2 = ["audi", "bmw", "xuv"];
cars2.unshift("toyota")
console.log(cars2);     //output--> ["toyota", "audi", "bmw", "xuv"];

//==>shift--> {delete from start and return it}
cars2.shift("toyota");
console.log(cars2);     //output-->["audi", "bmw", "xuv"];


// ----------------------->{(indexOf) & (include)} method <-------------------
//----> indexOf --> returns index of something
let cars6 = ["bmw", "audi", "xuv", "maruti"];
console.log(cars6.indexOf("bmw"));    //output-->0   //-->present
console.log(cars6.indexOf("xuv"));    //output-->2  //-->present
console.log(cars6.indexOf("XUV"));    //output-->-1   //-->not present
console.log(cars6.indexOf("lamborgini"));    //output-->-1   //-->not present

//----> include--> search for a value
let cars7 = ["bmw", "audi", "xuv", "maruti"];
console.log(cars7.includes("bmw"));    //output-->true   //-->present
console.log(cars7.includes("xuv"));    //output-->true  //-->present
console.log(cars7.includes("XUV"));    //output-->false   //-->not present
console.log(cars7.includes("lamborgini"));    //output-->false   //-->not present


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


// ---------------------------->slice method<----------------------------------
//--->NOTE:: slice method not change in original array itst take copies
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors.slice());   //-->as it is colors array print beacuse no argument given
// output--> [ 'red', 'yellow', 'blue', 'orange', 'pink', 'white' ]
console.log(colors.slice(2));   //output-->[ 'blue', 'orange', 'pink', 'white' ]
console.log(colors.slice(2, 3));   //output-->[ 'blue']
console.log(colors.slice(-2));     //output-->['pink', 'white']
console.log(colors.slice(colors.length-1));   //output--> white


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

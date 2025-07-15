// for loop
//syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } 

//for loop example
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}
// console.log(element);    //element not access outside because its inside a loop


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );     //to print table
   }
    
}


//-->loops with array
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
     
}                                                      //output--> flash   batman    superman
//---> to print reverse array
let myArray1 = ["flash", "batman", "superman"]
//console.log(myArray1.length);
for (let index = myArray1.length; index >= 0; index--) {
    const element = myArray1[index];
    console.log(element);                             //output---> superman  batman  flash
}          


// ----->nested array with nested loop
let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"] ];

for(let i=0; i<heroes.length; i++){
    console.log(i, heroes[i], heroes[i].length);
    for(let j=0; j<heroes[i].length; j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}
//output
/*
0 [ 'ironman', 'spiderman', 'thor' ] 3
j=0, ironman
j=1, spiderman
j=2, thor
1 [ 'superman', 'wonder woman', 'flash' ] 3
j=0, superman
j=1, wonder woman
j=2, flash
*/




// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}



//-->print all odd numbers (1 to 15)

// --> forward
for(let i = 1; i <= 15; i=i+2){
     console.log(i);
}                                    //output --> 1 3 5 7 9 11 13 15

// ---->backward
for(let i = 15; i>=1 ; i = i-2){
    console.log(i);
}                                   //output---> 15 13 11 9 7 5 3 1



//---->print all even numbers(2 to 10)
//-->forward
for(let i = 2; i<=10 ; i=i+2){
    console.log(i);
}                                   //output----> 2 4 6 8 10


//-->backward
for(let i = 10; i>=2; i=i-2){
    console.log(i);
}                                   //output----->10 8 6 4 2




//print the table of any number
for(let i=5; i<=50; i=i+5 ){
    console.log(i);
}                                    //output--> 5 10 15 20 25 30 35 40 45 50
 

//to print a table of any number by taking an input
let n = prompt("enter any number");
    n = parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}                                      //output--> 5 10 15 20 25 30 35 40 45 50


//print the table from one number to other like print table from 1 to 10
let num = 10;
for(let i = 2; i<=num; i++){
    console.log(`table of ${i}`);
    for( j = 1; j<=num; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log("----------------------")
}



//

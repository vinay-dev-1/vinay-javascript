// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// "===" --> this is for strict check  
console.log("2" === 2);     //output --> false 
//this is strict because it also compare type jab ki "==" type compare nahi karta 
console.log("2" !== 2);    //output--> true
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true
//The reason is that an eqaulity check == and comparison '>' '<' '>=' '<=' work differently.
//comaparsion covert null to a number, treating it as 0.
//That's Why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// always false




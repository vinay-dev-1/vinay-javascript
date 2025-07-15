// for of

// ["", "", ""]    //array ke andar string
// [{}, {}, {}]    //array ke andar object

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}                            //output---> 1  2  3  4  5

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}                                           
//output----->
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")      //not print again this value because map know for unique value only and also map print in order
// console.log(map);
// --> output
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
*/


//use of for of loop with map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//output-->
// IN :- India
// USA :- United States of America
// Fr :- France


// ----->use for of loop of any object
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
//---> koi output nahi aayega
//---> object are not iterable
//--->objects ke liye for of loop kaam nahi karega



const myObject1 = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject1) {
    console.log(key, ':-', value);
    
}
//isspe bhi for of loop kaam nahii krega



//nested for of loop

let heroes = [["batman", "spiderman", "thor",], ["superman", "wonder woman", "flash"]]

for (list of heroes){
    for(hero of list){
        console.log(hero);
    }
}
//output-->
// batman
// spiderman
// thor
// superman
// wonder woman
// flash


let movies = [[dushman1, dushman2, dushman3], [dushman4, dushmman5, dushman6]]; 
for(let i; i<=movies.length; i++){
    console.log(i);
}
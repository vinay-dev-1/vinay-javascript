//for of loop kaam nahi karega issliye for in loop use karenge object me

//----> for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
//output
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}


//this do not work beause its not iterable 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }
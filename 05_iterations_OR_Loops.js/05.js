const coding = ["js", "ruby", "java", "python", "cpp"]

//forEach loop using normal function
// coding.forEach( function (val){
//     console.log(val);
// } )                  //output---> js ruby java python cpp

//forEach loop using arrow fucntion
// coding.forEach( (item) => {
//     console.log(item);
// } )


//ese bhi kar sakte hai pehele function ko define karke
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


//arrow function me only item hi nahi aata (item, index, arr) all parameter possible
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
//output-->
/*
js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
*/



//agar array ke andar object ho to 
// [{},{},{}]
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
//output-->
/*
javascript
java
python
*/
// how to declare object with the help of singleton or constructor
// const tinderUser = new Object()  -->singleton object


const tinderUser = {}  //non sigleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);  //output--> print the object -->{ id: '123abc', name: 'Sammy', isLoggedIn: false }


//-->nested loop{object of objects}
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

//-->one more example of object of objects
const classInfo = {
    aman: {
        grade: "A+",
        city: "delhi"
    },
    vinay: {
        grade: "A",
        city: "jaipur"
    },
    rahul: {
        grade: "B",
        city: "jodhpur"
    }
};


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3);
//output-->{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//but this is not good

//for proper output
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3)
//output-->{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//issko bhi kam hi use karenge

// mainly ye syntax use aayega
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


//==>Array of objects-->starting
const ClassInfo = [
 {
    name: "aman",
    grade: "A+",
    city: "Delhi"
 },
 {
     name: "vinay",
    grade: "A",
    city: "jaipur"
 },
 {
     name: "rahul",
    grade: "0",
    city: "Mumbai"
 }
]
console.log(ClassInfo);
/* output 
   '0': { name: 'aman', grade: 'A+', city: 'Delhi' },
  '1': { name: 'vinay', grade: 'A', city: 'jaipur' },
  '2': { name: 'rahul', grade: '0', city: 'Mumbai' }
*/
//access by index jaise array me karte the
console.log(ClassInfo[0]);
//output-->{ name: 'aman', grade: 'A+', city: 'Delhi' }
console.log(ClassInfo[1]);
//output-->{ name: 'vinay', grade: 'A', city: 'jaipur' }
console.log(ClassInfo[2]);
//output-->{ name: 'rahul', grade: '0', city: 'Mumbai' }
console.log(ClassInfo[0].name);
//output--> aman
console.log(ClassInfo[0].grade);
//output-->A+
console.log(ClassInfo[0].city);
//output-->Delhi

//update
ClassInfo[0].city = "gurgaon";
console.log(ClassInfo[0].city);
//output-->gurgaon

//Add
ClassInfo[0].gender = "male";
console.log(ClassInfo[0]);
// ooutput-->{ name: 'aman', grade: 'A+', city: 'gurgaon', gender: 'male' }
//gender property added


// --------ending



//**********more methods

// console.log(tinderUser);
//output--> { id: '123abc', name: 'Sammy', isLoggedIn: false }   

//--> to access all the keys {this is in array format}
// console.log(Object.keys(tinderUser));
// output-->[ 'id', 'name', 'isLoggedIn' ]

// -->to acces all values
// console.log(Object.values(tinderUser));
//output-->[ '123abc', 'Sammy', false ]

//every key value in array 
// console.log(Object.entries(tinderUser));
//output-->[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// -->this uses to check whether this is present or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//output--> true



//--->object de-structure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor 
// //aise acces karne ki jagaha de-structure kar sakte hai 

//-->destructor 
// const {courseInstructor} = course
// console.log(courseInstructor);
// output---> hitesh

// -->destructor
// const {courseInstructor : instructor} = course
// console.log(instructor);  //output--> hitesh



// JSON API format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// another json api format in array format
[
    {},
    {},
    {}
]


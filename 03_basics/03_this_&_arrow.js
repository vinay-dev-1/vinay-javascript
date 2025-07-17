/***********This  keyword */
//==> This keyword refers to an object that is executing the current piece of code

//Example-->
const student = {
    name: "vinay",
    age: 21,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        // let avg = (eng + math + phy)/3; --> eng,phy,math not defined
        //so if we want to access that we use "this keyword"
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(avg);
    }
}
student.getAvg();  //output--> 95

//Example2-->
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
    }
}
user.welcomeMessage()  //output --> hitesh, welcome to website


//--> we also try to print 'this' object
const user1 = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(this);
    }
}
user.welcomeMessage();   
//output--> 
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
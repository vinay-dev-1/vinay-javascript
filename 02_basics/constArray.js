// JavaScript Array Const


// Cannot be Reassigned
// An array declared with const cannot be reassigned

//Example
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR




// Arrays are Not Constants
// The keyword const is a little misleading.

// It does NOT define a constant array. It defines a constant reference to an array.

// Because of this, we can still change the elements of a constant array.


// Elements Can be Reassigned
// You can change the elements of a constant array:
// ------->Example
// // You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];

// // You can change an element:
// cars[0] = "Toyota";

// // You can add an element:
// cars.push("Audi");


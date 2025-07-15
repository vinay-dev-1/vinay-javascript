//--> BAISC SYNTAX
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "jan"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


//another example
let x = 25;

switch (true) {
    case (x > 10 && x < 20):
        console.log("The num is between 10 and 20");
        break; // 
    case (x > 20 && x < 50):
        console.log("The num is between 20 and 50");
        break;
}



//another example
let amount = 750; // Change this value to test different cases
let discount;

switch (true) {
    case (typeof amount !== "number" || amount < 0):
        discount = "Invalid Input";
        break;
    case (amount < 500):
        discount = "No Discount";
        break;
    case (amount >= 500 && amount < 1000):
        discount = "10% Discount";
        break;
    case (amount >= 1000 && amount < 2000):
        discount = "20% Discount";
        break;
    case (amount >= 2000 && amount < 4000):
        discount = "30% Discount";
        break;
    case (amount >= 4000 && amount < 5000):
        discount = "40% Discount";
        break;
    case (amount >= 5000):
        discount = "50% Discount";
        break;
    default:
        discount = "Invalid Input";
}

console.log(discount);
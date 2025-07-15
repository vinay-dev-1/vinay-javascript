/**********factorial program********* */

//********************with using fucntion***********

function factorial(n) {
  if (n < 0) {
    return "Invalid input. Factorial is not defined for negative numbers.";
  }

  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
  }

  return answer;
}

// Example test cases
console.log(factorial(5));   // Output: 120
console.log(factorial(0));   // Output: 1
console.log(factorial(-2));  // Output: Invalid input message



// /---------->without using function************
let num = -5;

if(num < 0){
    console.log("invalid input. Factorial is not define for negative number");
}else{
       let result = 1;
       for(let i = 1; i<=num; i++){
             result *= i;
        }
          console.log(result);
}


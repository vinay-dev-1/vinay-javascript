///**********to find is it composite number or not*/

//method 1
let num = 5;

let iscomposite = false;

for(let i=2 ; i<num ; i++){
    if(num % 2 == 0){
        iscomposite = true;
        break;
    }
}
if(iscomposite){
    console.log("composite")
    
}
else{
    console.log(" not composite")
}



// ***************another method 
let num1 = 5;
let factorialCount = 0;
let answer;

for(let i = 1 ; i < num1 ; i++){
    if(num1 % i == 0){
        factorialCount++;
    }
}

if(factorialCount > 2){
    answer = true;
}
else{
     answer = false;
}

console.log(answer);
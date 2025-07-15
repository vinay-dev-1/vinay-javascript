// to find a number is prime or not

let num = 6;

let isprime = true;

for(let i=2; i<num; i++){
    if(num % i == 0){
        isprime = false;
        break;
    }
}

if(isprime){
    console.log("number is prime");
}
else{
    console.log("not prime")
}




// *******************now to find all the prime number form 1 to 100


// --> without using isprime 

for(let num = 2; num<=100; num++){
   
 let divisorCount = 0 ;

    for(let i = 1; i<=num; i++){
        if(num%i == 0){
            divisorCount++
        }
    }
    if(divisorCount === 2){
        console.log(num);
    }

}



//with using is prime

for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    // Check if num is divisible by any number from 2 to sqrt(num)
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}



//another method by using is prime
for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    // Check from 2 to num - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}



// *******************now to find sum of all the prime number form 1 to 100
let num1 =100;
let count = 0;
for(let i = 2; i<=num1; i++){
    let isPrime = true;
 

    for(j=2; j<i; j++){
        if(i%j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        count = count + i;
        
    }
}
console.log(count);



// do this without is prime
let num2 = 50;


let count1 = 0;


for(let i=1 ; i<=num2 ; i++){
    let divisorCount = 0;
    for(let j=1; j<=i; j++){
        if(i%j == 0){
            divisorCount++;
        }
    }
    if(divisorCount === 2){
        count1 = count1+i;
    }

}
console.log(count);




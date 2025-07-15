//---> Guessing Game
//user enteres a max number & tries to guess a random generated number between 1 to max


// const max = prompt("enter the max number");

// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");

// while(true){
//     if(guess ==  "quit"){
//         console.log("quit");
//         break;
//     }
//     if(guess == random){
//         console.log("you are right! congrats!! random number",random );
//         break;
//     }
//     else{
//         guess = prompt("guess is wrong enter the number again");
//     }
// }


//--> introduce hints in this

const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess ==  "quit"){
        console.log("quit");
        break;
    }
    if(guess == random){
        console.log("you are right! congrats!! random number",random );
        break;
    }else if(guess < random){
        guess = prompt("guess again, your number is to small");
    }else{
        guess = prompt("guess again, your numer is to big");
    }
    
}
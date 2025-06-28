const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // not use but aisa ho sakta hai possible hai
let accountState;   // output will be undefined because koi value define nahi kari

// accountId = 2 // not allowed because of const keyword


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);  // not easy method because again and again right console.log so use console.table

//console.table   "issme ek baar me hi sare print karwa do baar baar nahi likhna padhta"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
faces some debugging isssues 
*/
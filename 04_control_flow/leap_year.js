let year = 2008;

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
           console.log("leap year")
        }else{
            console.log("not a leap year")
        }
        
    }else{
        console.log("is a leap year");
    }
}else{
    console.log("not a leap year");
}


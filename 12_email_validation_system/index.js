
        const email = prompt("enter an email");
        
        const emailLen = email.length;

        //to find dot index
        const dotIndex = email.lastIndexOf('.');

        //to find @ index
        const atIndex = email.lastIndexOf('@');

        //to find last index
        const lastIndex = emailLen - 1;


       if(
         emailLen < 11 ||
         lastIndex - dotIndex < 2 ||
         lastIndex - dotIndex > 3 ||
         dotIndex - atIndex < 3
        ) {
                console.log("invalid email");
       }
       else{
        console.log("valid email");
       }





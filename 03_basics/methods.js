// ==>Methods
//--> Actions that can be performed on an object.
//--> jo functions object ke andar define hote hai unnko hi method kehte hai

//-->Example
const calculator = {
    add: function(a,b) {
        return a+b;
    },
    sub: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    }
};
console.log(calculator);
//output-->{ add: [Function: add], sub: [Function: sub], mul: [Function: mul] }

//to acces that function
console.log(calculator.add);
//output -- >[Function: add]

//to do  operation in add, sum ,mul function under object
console.log(calculator.add(1,2));
//output-->3



//===========> Methods shorthand
const calculator1 = {
    add(a,b) {
        return a+b;
    },
    sub(a,b) {
        return a-b;
    },
    mul(a,b) {
        return a*b;
    }
};
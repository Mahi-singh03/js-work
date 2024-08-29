//                                       Error handling

// when an erroe occouers it stop further execution of the script
// To overcome such problem the error handling is used
// in herre handling try and catch blocks is used
// usiinig this method the script execution doesnt efferted by the error 


// Example : 

// first we try to executea script without error handling 
// let a = 4;
// let b = 2;

// console.log( " a = 4 and b = 2 ");
// console.log( "a + b = ",a+b);
// console.lo000000g( "a - b = ",a-b);     // error 
// console.log( "a * b = ",a*b);           // no further exection from here executed
// console.log( "a / b = ",a/b);
// console.log( "a % b = ",a%b);
// console.log( "a ** b = ",a**b);






// Now try with try and catch  

let a = 4;
let b = 2;

console.log( " a = 4 and b = 2 ");
console.log( "a + b = ",a+b);
try{
    console.lo000000g( "a - b = ",a-b);         // scrip try the code inside of try block
}catch(error){
    console.log(error)                      // in case of error in try block the script inside
    }                                       // catch block executed.
console.log( "a * b = ",a*b);                                
console.log( "a / b = ",a/b);
console.log( "a % b = ",a%b);
console.log( "a ** b = ",a**b);
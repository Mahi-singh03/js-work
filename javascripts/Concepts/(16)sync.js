//                                   Sync in js
// sync is the mannar / sequence of the code execution
// it can be of two types:

// Synchronous 
// Asynchronous



// Synchronous :

// In Synchronous code execution means the instruction runs in a particular sequence.
// each instruction wait previous instruction to wait

// Example :

// console.log(" instruction 1")
// console.log(" instruction 2")
// console.log(" instruction 3")
// console.log(" instruction 4")
// console.log(" instruction 5")
// each instruction wait for first instruction t complete.






{
    // Timeout() function

//When using the JavaScript function setTimeout(), you can specify a callback function 
 //to be executed on time-out

}








// Asynchronous :

// In asychronous code execution if a instruction takes time to execute in this 
// code execution the doest get effected. the instruction atfer time taking iinistruction
// take place parallely with the tame taking instruction
// in this way code execution doesnt get effected


// Example :

console.log(" instruction 1")
console.log(" instruction 2")
setTimeout(()=>{
    console.log(" instruction 3")
}, 4000)                                 // 4000 is 4000ms
console.log(" instruction 4")
console.log(" instruction 5")

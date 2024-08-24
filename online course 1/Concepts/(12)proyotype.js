//                          Objects
// a javv script object is an entity  having state and behaviour 

//                        Proto types:
// js object has a special property called prototype.
//   * if object & a Prototype have same method , object method is used.

// example:

// let std = {
//     name: "manoj",
//     class: "Bsc",
//     Marks: 78,
//     roll: 503,
//     pm: () => {
//         console.log(std.roll);   // using the arrow function
//     }
// };


// let std = {
//     name: "manoj",
//     class: "Bsc",
//     Marks: 78,
//     roll: 503,
//     pm: function() {           // using reguler functions
//         console.log(this.roll);      // "this" keyword refers to scope inside the function
//     }
// };



// By protoype you can assess the function of one object in another object 
// EXAMPLE of creating th e proto type 


// step 1 ) creating the  tex object storeing GST rates.
const tex = {
    low_sel : low_sel=()=>{
    console.log("10%")
    return 0.10
    },
    heigh_sel : heigh_sel=()=>{
    console.log("18%")
    return 0.18
    }
} //Step 2 ) claculating tax of mahi and singh  using functions from tax objects
const mahi ={
    salery : "heigh",
    text_to_paid : heigh_sel()
}

const singh ={
    salery : "low",
    text_to_paid : low_sel()      
}

// Step 3 ) declaring tex object as prototypes in mahi and singh object so that 
//  we can access the  tex function inside the mahi and singh object. 
mahi.__Proto__= tex;
singh.__Proto__= tex;



//Step 4 ) printing the objext mahi and singh.


console.log(mahi);
console.log(singh)


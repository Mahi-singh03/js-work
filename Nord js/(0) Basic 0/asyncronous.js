// Nord is a Asycronous library for javascript
// It is a simple library that allows you to create asyncronous functions


//example :

// console.log("1")
// console.log("2")
// console.log("3")



// let say the 2 is taking some time then,

// console.log("1")
// setTimeout(() => {
//     console.log("2")
// }, 2000)
// console.log("3")




// probelem

// let a = 10
// let b = 20
// let c = 0

// setTimeout(() => {
//     let c = 30             // let say value of c is comming from th server with delay
    
// }, 2000)
// let d = 40


// console.log(a + b)  
// console.log(c + d)   //  if we want to use the value of c = 30 coming from the server we use promises



//Solution :

let a = 10
let b = 20
let c = 0

new Promise((resolve, reject) => {
    setTimeout(() => {
        let c = 30
        resolve(c)
    }, 2000)
}).then((c) => {
    let d = 40
    console.log(a + b)
    console.log(c + d)
})
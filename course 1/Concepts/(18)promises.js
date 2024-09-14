
//                                    Promises

// Promises are objects in Js
// promises is for "eventual" completion of task
// A JavaScript Promise object can be:
// [1] Pending
// [2] Fulfilled
// [3] Rejected

// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.


// let say you are accesing the data from a server which take time then it returns you a promise which when resolve get or get rejected, you can cosume the promise 







// Example 1 ) Creation and consumption of promises

//Creation of promises

// const promises1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("The data is featched")
//         resolve()
//     },2000)
// })

// consumption of promises 

// promises1.then(()=>{
//     console.log(" te data is viewed ")
// })











// Exapmle 2 ) Passing the value inside the resolve function :
// Assumption there is NO errors


// const promiseA = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // do same task
//         resolve({info1 : "abc",info2 : "xyz"})  // the passed data is data requested from user
//     },4000)
// }).then((data)=>{     // this data is the object return by resolve
//     console.log(data)   // we can acess data because of ".then" ehich is passible due to 
// })                       // resolve









//Exmaple 3 )
// in this example error may possible
// const promiseB = new Promise ((resolve,reject)=> {
//     setTimeout(()=>{
//     let error = true     // cahnge this to create the problem or removee the problem
//     if(error != true){
//         resolve({info1 : "abc",info2 : "xyz"})
//     }
//     else{
//         reject("IK problem aa gai")
//     }
//     },4000)
// }).then((data)=>{
//     console.log(data)
// }).catch((problem)=>{
//     console.log(problem)
// })








//  Example 4 ) 
//let say you want only info1 from object return by resolve in such cases you can use
 // multiope ".then"
// this adding additional ".then" is called chaning

// Using same code from exapmle 3

// const promiseB = new Promise ((resolve,reject)=> {
//     setTimeout(()=>{
//     let error = false     // cahnge this to create the problem or removee the problem
//     if(error != true){
//         resolve({info1 : "abc",info2 : "xyz"})
//     }
//     else{
//         reject("IK problem aa gai")
//     }
//     },4000)
// })
// .then((data)=>{
//     return data.info1
// })
// .then((final_data)=>{
//     console.log(`the dat you requeste is : ${final_data}`)
// })
// .catch((problem)=>{
//     console.log(problem)
// })
// .finally(()=>{
//     console.log("the data is fratched ")
// })

//  the finaly function is like diffault function which perform itself automaticaly












//   ASYNC AND AWAIT



// Exxample : 5 )
// you an handle dol sme thing with async and await function instead of ".then and .caught" method

// const promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false; // Change this to true to create the problem
//         if (error != true) {
//             resolve({ info1: "abc", info2: "xyz" });
//         } else {
//             reject("IK problem aa gai");
//         }
//     }, 4000);
// });

// async function a() {
//     try {
//         const result = await promiseB;
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Call the function to see the result
// a();




// Async And Await is in next chapter 
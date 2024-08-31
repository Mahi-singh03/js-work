//                                  Async Await

// async function always return a promise
// await pause the execution of its surrounding async function until the promis return

// for example :

function REPORT () {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("latest news")
            resolve(200)
        },2000)
    })
}

async function Update () {
    await REPORT()
    await REPORT()
}

Update()

// by using this code we overcome the call back hell problem












// Example : 2 )

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

//Call the function to see the result
// a();


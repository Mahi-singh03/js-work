// CONTENT :
// Difference btw Call the function outside , calling the function  inside another function 
 // {not as argument} and passing the function as argument inside another functionaka 
 // callback function 
// callback hell


//                                 Callback Function :

// A function which get pass in another function as an argument is called the call back function
// calback functions are writen without ()
// u can pass a pre-made function and also crete the function at that time 
// callback function is used when you want full control on script exection
// script execution is not depend upon the sequence of function declaration but depend upon
  // sequence of call back function
// In the real world, callbacks are most often used with asynchronous functions.
  //A typical example is JavaScript setTimeout()
//



// Difference btw Call the function outside , calling the function  inside another function 
 // {not as argument} and passing the function as argument inside another functionaka 
 // callback function
//


// sum = (a,b,c) => {
//     x =`sum of ${a}, ${b} and ${c} is : ${a+b+c}`
//     // display_result(x)              // uncomment for Approch 2
//     return x
// }


// display_result = (x) =>{
//    console.log(x)
// }


// Approch 1 : calling the function :

// display_result(result)          // wrong way
// result = sum(10,10,10)            

// shows undefined as output de to incorect sequence of function call
// to solve this problem you have to be carefull with sequence of function call



// result = sum(10,10,10)  
// display_result(result)          // Right way
// shows undefined as output de to incorect sequence of function call





// Approch 2 : calling the function  inside another function {not as argument}

// calling the function inside another function { not as argument }

// sum(10, 10, 10)






//  Approch 3 : passing the function as argument inside another aka callback function

// for this approch comment above code :


// sum = (a,b,c,fun) => {
//     x =`sum of ${a}, ${b} and ${c} is : ${a+b+c}`
//     fun(x)
//     return x
// }
// display_result = (x) =>{
//     console.log(x)
// }

// sum(10,10,10,display_result)    // displaY_result function is callback function here









// Exampe 1 :

// step 1 ) creating the function "sum"
// sum = (a,b,c) => {
//     console.log(`sum of ${a}, ${b} and ${c} is : ${a+b+c}`)
//}

// step 2 ) creating the another function called "cal" and passing the "sum" finction as an
//    argument AKA as the callback function 
// cal = (a,b,c,sum1) => {
//     sum1(a,b,c)
// }

//  step 3 ) calling the "cal" function
// cal (10, 10, 10, sum)







// Example 2 :

// Step 1 ) Creatiing the function 
// hello = () => {
//     console.log("hello")
// }

// step 2 ) passing the "hello" function as callback function inside the setTimeout
// setTimeout(hello , 5000) 



















//  Callback hell

// it is when callbacks are nested one anoth forming a pyramis called pyramis of Doom
// it is when you write the code in nested form


// Example :

get_id = (id, next_id) => {
    setTimeout(() => {console.log(id)
    //next_id()
    if(next_id){
        next_id()
    }
    }, 4000
    )
}

// get_id(1)
// get_id(2)
// get_id(3)   // with this code the output is showes at same time after 4ms


// concider a senario where you have to show output of different instruction each after 
 // 4ms interval
//

// to do so we use callback function

get_id(1,()=>{

    get_id(2,()=>{
        get_id(3);
    })
})            // these nested callback are called callback hell



// such loop of callback is not good , therfore promises are interduced









//                          EVENTS
// change in state of the code is known as the EVENTS

//types:

//  ( 1 )  inline event
//  ( 2 )  external script.


let btn = document.querySelector(".button1")
console.dir(btn)

// btn.onclick=()=>{
//     console.log(" kiwe aa MAHARAJ")
// };

// btn.ondblclick=()=>{
//      console.log(",ahi ji")
// }



// btn.onclick=()=>{
//     let bg=document.querySelector("body")
//     bg.style.backgroundColor="red";
// };









// EVENT OBJECT



// Node.event = (event ) =>{
// .............................
// }

// event.type
// event.target
// event clientX, Client Y
// where event is variable and represent event objects

//  EXAPMLPLE :

// btn.onclick=(e)=>{
//     console.log(" kiwe aa MAHARAJ")
//     console.log(e.type);
// };

// btn.onclick=(e)=>{
//     console.log(" kiwe aa MAHARAJ ji")
    // console.log(e.type);
// };










// EVENT LISTNERS




// used when you have to perform multiple task on same event

// to add - event

// Element.addEventListener("event","callback gunction")

// to remove - event

// Element.removeEventListners("event","callback gunction")


// EXAMPLES:

btn.addEventListener("click",()=>{
    console.log("mahi singh")
})

btn.addEventListener("click",(e)=>{
    console.log("mahi singh ji 2")
    console.log(e.type);
})
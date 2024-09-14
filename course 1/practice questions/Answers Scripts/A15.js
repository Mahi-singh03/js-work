let btn = document.querySelector(".mode")
console.dir(btn)
let bdy = document.querySelector("body") 

// step 1) creating a toggle butto n who toggle between states 
let mode="L"
btn.addEventListener("click",()=>{
    if (mode==="D"){
        mode="L"
        bdy.style.backgroundColor= "orange"
        
    }
    else{
        mode="D"
        bdy.style.backgroundColor= "yellow"

    }
    console.log(mode)

})


// ALSO U CAN USE CLASSES



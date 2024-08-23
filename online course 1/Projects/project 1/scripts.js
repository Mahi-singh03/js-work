//ACESSING BUTTONS
let Gbtn =document.querySelectorAll(".btn");
let Rbtn=document.querySelector(".R-btn");
let bdy= document.querySelector("body")
let info=document.querySelector(".info")

// console.dir(Gbtn);
// console.dir(Rbtn);

let p1 = true //p1 is first user

// storing the wining pattern in 2D array

let win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

//ading eventListners gor each button:

Gbtn.forEach((btn) => {
   
    btn.addEventListener("click",()=>{
        
    if(p1){
        btn.classList.add("f2")  //addinf f1 class for red colured text
        btn.innerText="O"
        info.innerText="Second User's Turn"
        p1=false
    }
    else{
        info.innerText="First User's Turn"
        btn.classList.add("f1") //addinf f1 class for blue colured text
        btn.innerText="X"
        p1=true
    }
   
    winner();
    btn.disabled=true // disble button to diable double click
    })
   
})


//creating a function for cheacking the win patterns

const winner= ()=>{
    // console.log("hanji dosto");
    
    
    for( i of win ){
      //  console.log(i[0],i[1],i[2]);                     // cheacking the value of 
      //                                                        every index of winnning pattern.
      //  console.log(Gbtn[i[0]],Gbtn[i[1]],Gbtn[i[2]]);   //this make the winnig patterned numbered
      //                                                        box connecting with its related numbered box

        let v1=Gbtn[i[0]].innerText                 // used to get inner text like 0 or X
        let v2=Gbtn[i[1]].innerText                 // used to get inner text like 0 or X
        let v3=Gbtn[i[2]].innerText                 // used to get inner text like 0 or X
        

        if(  v1!="" &&  v2!="" && v3!="" ){
            if(v1===v2 && v2===v3){
                console.log("jit gaye maharaj tusi")
                bdy.style.backgroundColor=" #98FB98";
                if(p1==true){
                    info.innerText="User 1 wins"
                    info.classList.add("w1")
                }
                else{
                    info.innerText="User 2 wins"
                    info.classList.add("w2")
                }
                diable();
            }
        }
    }
}

// function to diable all button after winner is announced

diable= () =>{
    for(j of Gbtn){
        j.disabled=true;
    }
}



// function to enable all button for new game
enable= () =>{
    for(j of Gbtn){
       j.disabled=false;
       j.innerText="";

    }
}





// Rset button

Rbtn.addEventListener("click",()=>{
    enable();
    info.innerText="First User's Turn"
    p1==true

})
console.log(Rbtn)

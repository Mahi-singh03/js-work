//ACESSING BUTTONS
let Gbtn =document.querySelectorAll(".btn");
let Rbtn=document.querySelector(".R-btn");
let bdy= document.querySelector("body")
let info=document.querySelector(".info")

// console.dir(Gbtn);
// console.dir(Rbtn);

let p1 = false //p1 is first user

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


//creating a function for cheacking the win patterns

Gbtn.forEach((btn) => {
   
    btn.addEventListener("click",()=>{ 
    if(p1){
        btn.innerText="O"
        btn.classList.add("btnBLUE")  //addinf f1 class for red colured text
        info.classList.add("infoRED")
        info.innerText="1st User's Turn"
        p1=false
        btn.classList.remove("btnRED")
        info.classList.remove("infoBLUE")
    }
    else{
        info.innerText="2nd User's Turn"
        btn.innerText="X"
        btn.classList.add("btnRED") //addinf f1 class for blue colured text
        info.classList.add("infoBLUE")
        p1=true
        btn.classList.remove("btnBLUE")
        info.classList.remove("infoRED")
    }
    winner();   
    console.log(p1)
   
    Gbtn.disabled=true // disble button to diable double click
    })

})



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

                    info.classList.remove("infoBLUE")
                    info.classList.add("infoRED")
                    info.innerText="2nd User Wins"    
                }
                else{
                    info.classList.add("infoBLUE")
                    info.innerText="1st User Wins"
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



//function to enable all button for new game
enable= () =>{
    for(j of Gbtn){
       j.disabled=false;
       j.innerText="";

    }
}





// Rset button

Rbtn.addEventListener("click",()=>{
    enable();
    info.innerText="1st User's Turn"
    p1 = false
    bdy.style.backgroundColor=" #FFFFFF"
})


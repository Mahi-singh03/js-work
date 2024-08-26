let UserScore = 0;
let CompScore = 0;

let choices = document.querySelectorAll(".img");
info = document.querySelector(".P-MDiv")
bdy = document.querySelector("body")


const compChoice = () => {
    let option =["im_R","im_P","im_S"];
    let random = Math.floor(Math.random()*3)
    if (random==0){
        console.log("0")
        
    }else if(random==1){
        console.log("1")
    }else{
        console.log("2")
    }
    return option[random];
}

choices.forEach((ch) => {
    ch.addEventListener("click",() =>{
        let userChoice = ch.getAttribute("id")
        game(userChoice);
        return userChoice
    })
});
 


game = (userChoice) => {
    u = userChoice
    c = compChoice()
    console.log("user",u)
    console.log("comp",c)
    if( u==c ){
      
        draw();
    
    }
    else{
        
        let W = true
        
        if(u=="im_R"){
            W = c =="im_P"? false : true
        }else if (u=="im_P"){
            W = c =="im_S"? false : true
        }else{
            W = c =="im_R"? false: true
        }
         winner(W);
    }
}


draw= () => {
    console.log("draw")  
    info.innerText = "THE MATCH IS DRAW"
    bdy.style.backgroundColor = "#FFFFFF"

}
winner=(W)=>{
   if(W=true){
    console.log("COMPUTER WIN")
   }else{
    console.log("YOU WIN")
   }
}



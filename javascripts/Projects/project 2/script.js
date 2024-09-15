let UserScore = 0;
let CompScore = 0;

let choices = document.querySelectorAll(".img");
info = document.querySelector(".P-MDiv")
bdy = document.querySelector("body")
View_Uscore = document.querySelector("#UScore")
View_Cscore = document.querySelector("#CScore")

ComD = document.querySelector(".P-MDivU")


const compChoice = () => {
    let option =["ROCK","PAPER","SCISSORS"];
    let random = Math.floor(Math.random()*3)
    if (random==0){
        console.log("0")
    }else if(random==1){
        console.log("1")
    }else{
        console.log("2")
    }
    ComD.innerText= `Compter Choosed ${option[random]}`
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
    u = userChoice;
    c = compChoice();
    console.log("user", u);
    console.log("comp", c);
    if (u == c) {
        draw();
    } else {
        let W = true;
        if (u == "ROCK") {
            W = c == "PAPER" ? false : true;
        } else if (u == "PAPER") {
            W = c == "SCISSORS" ? false : true;
        } else {
            W = c == "ROCK" ? false : true;
        }
        console.log(W)
        winner(W);
    }
}



draw= () => {
    console.log("draw")  
    info.innerText = "THE MATCH IS DRAW"
    bdy.style.backgroundColor = "#FFFFFF"

}
winner=(W)=>{
   if(W==true){
    console.log("YOU WIN")
    UserScore=UserScore+1
    View_Uscore.innerText = UserScore
    info.innerText="YOU WIN"
    bdy.style.backgroundColor= "rgb(137, 241, 128)"

   }else{
    console.log("COMPUTER WIN")
    CompScore=CompScore+1
    View_Cscore.innerText = CompScore
    info.innerText="YOU LOSE, COMPUTER WINS"
    bdy.style.backgroundColor= "rgb(190, 44, 18)"
   }
}



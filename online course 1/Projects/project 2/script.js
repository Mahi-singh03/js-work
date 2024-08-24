let UserScore = 0;
let CompScore = 0;

let choices = document.querySelectorAll(".opU");






choices.forEach((ch) => {
    ch.addEventListener("click",() =>{
        let userChoice = ch.id
        console.log(userChoice);
       
        
        compChoice();       
        winner(userChoice);

        
        
        let compChice = compChoice();
        console.log(compChice)
        return userChoice
    })
});




const compChoice = () => {
    let option =["rock","paper","seasor"];
    let random = Math.floor(Math.random()*3)
    console.log(random);
    return option[random];
}





const winner = (userChoice) => {
    if( userChoice == compChoice){
        console.log("draw")
    }
    

}



button = document.querySelectorAll("button")
output = document.querySelector(".input")
str  = ""

Array.from(button).forEach((i)=>{
    i.addEventListener("click",(i) => {
        if(i.target.innerHTML == "="){
            str = eval(str)
            output.value = str
        }
        else if(i.target.innerHTML == "AC"){
            str = ""
            output.value = str
        }
        else if(i.target.innerHTML == "%"){
            str = str*0.01
            output.value = str
        }
        else if(i.target.innerHTML == "DEL"){
            str = str.slice(0, -1);
            output.value = str
        }
        else{
            console.log("clicked",i.target.innerHTML)
            str = str + i.target.innerHTML
            output.value = str
        }}
    )
})

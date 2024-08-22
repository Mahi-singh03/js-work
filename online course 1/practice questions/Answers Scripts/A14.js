let previ = document.querySelector(".ms")
console.dir(previ);


// set new attributes without keeping the previous one

//step 1 accesing the class

let att1 = previ.getAttribute("class")
console.dir(att1)


// step 2 sect the new attributes class

// previ.setAttribute("class","MB");

// let previ2 = document.querySelector("p")
// console.dir(previ2);


// set the new attributes  using class list so that class dont get overwrite

previ.classList.add("MB");

final = document.querySelector("p")
cl_list = previ.classList
console.log(final);
console.log(cl_list)

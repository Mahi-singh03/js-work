

//                                            NOTES



// ( . ) for class
// ( # ) for id

// USE consol.dir(--) to print the selected item as the objectfa-spin
// USE consol.log(--) to print the selected item as whole.                                 
                                   
//                                     DOM MANIPULATION:

// ways for accessing the element :

// ( 1 ) select with id
//      -> document.getElementByid("MyId") 
// ( 2 ) select with class
//      -> document.getElementByClassName("MyClass") 
// ( 3 ) select with tag
//      -> document.getElementByid("tag") 


// ( 4 ) Queryselector
//      -> document.Queryselector(  "tag"  ||  ".clss"  ||  "#id") 


 
// properties :


// ( 1 ) tagName { returns tag for the element node}
// ( 2 ) innerText { returns the text content of the element and its children }
// ( 3 ) inner HTML { return the plane text or html content in the elemrnt}
// ( 4 ) inner text {  returns textual content even for hidden element }


// ways of changing the elements :


// attributes :

// ( 1 ) elemet.getattributes(id/name/class etc)
// ( 2 ) element.setsttributes( attributes, values)
// ( 3 ) element.style




// Ways of adding the element :

// step ( 1 )  create the element. 
// step ( 2 )  insert element.
     
//       -> node.append(el)    { add at he end of the node(inside) }
//       -> node.prepend(el)    {  add athe start of the element (inside) }
//       -> node.befoe(el)      { add before the node (outside) }
//       -> node.after(el)      { ass after the node ( outside) }
//       -> .append childnode

// node.remove(el)






//                                PRACTICICE






// heading = document.getElementById("MainHeading")

// console.dir(heading)











// details = document.getElementsByClassName("main")

// console.log(details)











// USE "querySelector" TO SELECT ONLY FIRST ELEMENT MATCHING WITH THE ID/CLASS/TAG

// details = document.querySelector(".main")

// console.log(details);

// USE "querySelectorAll" TO SELECT ONLY ALL ELEMENT MATCHING WITH THE ID/CLASS/TAG


// details = document.querySelectorAll(".main")

// console.log(details);





//set attributes


// first= document.querySelector(".main")
// console.log(first);

// console.log(first.setAttribute("id","mahi"));
// console.log(first);






// ways of adding new elements :


//step 1) create the new element

// let btn = document.createElement("button")
// btn.innerText="mahi"
// console.log(btn)

//step 2) inserting th element

// append

// let div = document.querySelector(".main")
// div.append(btn);

// prepend

// let div = document.querySelector(".main")
// div.prepend(btn);

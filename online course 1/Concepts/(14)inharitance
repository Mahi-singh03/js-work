//                                  INHARITANCE
//it is passiing the properties and mahod/behaviour to the choild classes.

// setp 1) creaing the parent class
// class Parent {
//     constructor(){
//         console.log("happy family")
//     }
//     hello () {
//         console.log("hello")
//     }
// }


// step 2) creating the child class
// class child extends Parent {
//     hi( ){
//         console.log ("hi")
//     }
// }


// sep 3)creting the jija object from the child class
// jija = new child()


// step 4) varifying if the inharitance works

// console.log(jija.hello())
// console.log(jija.hi())








//                                       SUPER KEYWORD
// the super keyword is used to call the constructor of its parent  class to access
// the parent properties and methods

// it is used to solve the problem occurns when child and parent have differnt constructors


class Parent {
    constructor(){
       this.h= "ji"
    }
    hellow () {
        console.log("hello")
    }
}


class Child extends Parent {
    constructor(d){
        //super();              //also you can pass the same variable for both aprent and child class
                             // constructor by passing the variable to in the supper function 
        this.d = d
    }

    hello () {
        //super.hellow()           // the supper method can also be use to call a cretaine function of
                                   //  parent class in child class ir-respective to dlow of child class.  
        console.log("hell")
    }
}


didi = new Child("hi")


console.log(didi)
console.log(didi.hello())
//                                   CLASSES
// Classes is a program -code template for creaing  objects.
// used when you have to create multiple object based on a simple templalte
// this simple template is called class


// use "this" keywors for normal normal function.

//Example

// creating a class ( template for creating other objects  )
// class std {
//     name = (fname)=>{
//         console.log("My Nmae is",fname)
//     }
//     class = (classs)=>{
//         console.log("my class is",classs)
//     }
// }

//creaing objects from std class

// let mahi = new std()

// console.log(mahi.name("mahi"))





//                             CONSTRUCTORS

// cunstructors are the function that is executed initialy in the object without call ing the
// constuctor function; 

// definatly need use of "this" key in the constructors as it should be reguler function

//   Example  1 )


// class std {
    
//     constructor () {
//         console.log("hi")
//     }
//     name = (fname)=>{
//         console.log("My Nmae is",fname)
//         return fname
//     }
//     class = (classs)=>{
//         console.log("my class is",classs)
//     }
// }


// let mahi = new std()
// console.log(mahi)
// console.log(mahi.class("bsc"))



//Example 2

class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  
    getDetails() {
      return `${this.title} by ${this.author}, ISBN: ${this.isbn}`;
    }
  }
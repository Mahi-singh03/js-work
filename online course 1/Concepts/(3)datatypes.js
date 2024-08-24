//                       PREMITIVE DATATYPES ARE OF 7 TYPES :

// Number
// String
// Boolean
// undefined
// null
// BigInt
// Symbol







//                           NON PREMITIVE DATATYPES ARE :

// 1) OBJECT   { Array are also object but a special tye of  object }
// IS IS COLLECTIONS OF NON PREMITIVE DATATYPES IN FORM OF KEY VALE PAIRS


// PROTOTYPE (12)classes


const my_self = {
    FullName : "mahi singh",
    gender : "male",
    age : 22,
};
// KEY VALUE PAIR  OF OBJECT CAN BE UPDATED
my_self.age = my_self.age+10;
my_self.FullName = "Manoj";


console.log(my_self);
console.log(typeof(my_self));
console.log(my_self.age);
console.log(typeof(my_self.age));
//                             ARRAYS
// it can store different types of datatypes and also it is mutables 
// FOR for LOOP "OF" IS USED



// EXAMPLES OF ARRAY

// let marks =[ 34 ,56 ,67,87,97];


// console.log(marks);
// console.log(marks.length);
// console.log(marks[4])

// updating the value of index 0 from 34 to 43 

// marks[0]=43;
// console.log(marks);


// looping in Arrray
//printing all the element of array 
// l= marks.length

// for (i=0;i<l;i++){
//     console.log(marks[i]);
// };

// for ( let i of marks){
//     console.log(i);
// }






//                             ARRAY METHODS
//  array.pop()       { add the data in the last, change the exesting array }
//  array.pop()        {delete the item from end og array and return item }
//  array.tostring()
//  array.concat(array 2, array3 ....)          {returns new arrays}
//  array.unshift() { add items in start }
//  array.shift()          { delete from start and  return result }
//  array.slice(start index, ending index)           { return new array }
//  array.splice(index, delCount, new elemnts)  { use 0 to leave empty }

// let num = [1 ,2, 3, 4, 5, 6];
// console.log(num);

//EXAMPLES OF ARRAY METHODS :

// num.push(7, 8, 9,);
// console.log(num);


// let del_item =num.pop();
// console.log(num);
// console.log(del_item);


// console.log(num.toString());


// let num2 = [11, 12 ,23, 32];
// let new_num = num.concat(num2);
// console.log(new_num);



// num.unshift(100, 56);
// console.log(num);


// let del_num = num.shift()
// console.log(num);
// console.log(del_num);



// num.splice(3,2,"mahi","singh")
// console.log(num)




// -----------------------------------------------------------------------------------------

//   TO DO AFTER FUNCTIONS

//                                      ADVANCE ARRAY METHODS

// array.foreach loop
// array.map  { same as foreach loop but returns new array by return }
// array.filter  { returens a array filtered according to new array }
// array.reduce { it accepts a large array and reduce to }





//     EXAMPLES OF foreach loop


//   SYNTEX - array.foreach(call back function)
//  AVAILABLE PARAMETERS ARE VALUES, INDEX AND ARRAY ITSELF;

// let array =[ 1, 2, 3, 4]


// array.forEach(function print (val, index){
//     console.log(val ,index);
// })





//    EXAMPLES OF FILTER MATHODS


// let num = [ 1, 2, 3, 4, 5, 6, 7];

// function even(i){
//     return i%2 ===0;
// }

// evenArray=num.filter(even)
// console.log(evenArray)








//   EXAMPLES OF ARRAY.REDUCE


// num = [ 1, 2, 3,];


// function Summ (first,last){
//     return first + last
// }

// let result = num.reduce(Summ);

// console.log(result);
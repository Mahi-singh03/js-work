 num = [324, 6756, 867, 4656, 566, 456]

 function lNumber (a ,b) {
     return a>b?a:b
 }

  result = num.reduce(lNumber)
  console.log(result);



// Initially, a is 324 and b is 6756, so the function returns 6756.
// Then, a is 6756 and b is 867, so the function returns 6756.
// Then, a is 6756 and b is 4656, so the function returns 6756.
// Then, a is 6756 and b is 566, so the function returns 6756.
// Finally, a is 6756 and b is 456, so the function returns 6756.
// The final result is 6756, which is the largest number in the array.
let marks = [30, 56, 78, 99, 34, 54, 67];


l = marks.length;

sum=0;

for(i of marks){
    sum = sum + i;
}

console.log(l);
console.log(sum);

console.log(`the average of the marks [30, 56, 78, 99, 34, 54, 67] is ${sum/l}`)
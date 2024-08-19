price = [ 670 ,355, 546, 637, 636, 456, 67];

sum = 0;

for( i of price ){
    sum = sum + i*0.5;
}

console.log(`final price after 50% discount is :${sum}`)
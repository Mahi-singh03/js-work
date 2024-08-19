price = [ 670 ,355, 546, 637, 636, 456, 67];

sum = 0; 

for (let i = 0; i < price.length; i++) {  
    offer = price[i] * 0.5;  
    price[i] = price[i] - offer;  
    sum += offer;  
  }  
console.log(` the the Array of prices of goods afer 50% discount is ${price}`)
console.log(`final price after 50% discount is :${sum}`)
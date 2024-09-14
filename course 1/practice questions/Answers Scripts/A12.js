let num = []

let N = prompt(" Enter a number N from 1 to 10 : ")

// step 1 : Creating an array of number 1 to N

for (i=1;i<=N;i++){
    num[i-1]=i;
};
console.log(num)

// step 2 : create the sum function

function sum (first, last){
    return first + last
}

// step 3 : reducing the array by callbacking the num function

result= num.reduce(sum)
console.log(result)













marks = [ 45, 78, 43, 65, 78, 98, 99]

function toper  (i){
    return i>90;
}

finals=marks.filter(toper)
console.log(finals)
// step 1)  declaring the data
let data = "iam leaning a python too!"


// step 2) creating the staff classe
class staf {
    constructor(occuptaiton,level,salery){
        this.occuptaiton = occuptaiton
        this.level = level
        this.salery = salery
    }
    view_data () {
        console.log(data)
    }
}



// step 3) creating the principle child class of the staff class 


class principle extends staf {
    constructor(occuptaiton,level,salery){
        super(occuptaiton,level,salery)
        console.log( "hi")
    }

    edit_data (){               // function to edit the data
        data = " mahiraj"
    }
}


// cretaing the mahi object form derived class principle

mahi = new principle("Principal","heigh","67,00000")

console.log(mahi)
console.log(data)  // console to print data before edit

console.log(mahi.edit_data())
console.log(data)  // console to print the data after edit
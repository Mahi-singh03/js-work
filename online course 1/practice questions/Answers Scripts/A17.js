// creating the function rwquired

class std {
    constructor(name,classs,branch){
       this.name=name
       this.classs= classs
       this.branch=branch
    }

    show_info(){
        return `The new Student named ${this.name} admitted in class ${this.classs}  in the branch ${this.branch}`
    }
}


//creating the object if new student from class std


mahi = new std("mahi","Bsc","science");

console.log(mahi.show_info())


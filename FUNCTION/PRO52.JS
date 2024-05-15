class Student{
    
    //constructor
    constructor(b,c,d){
        this.nname=b
        this.rollno=c
        this.subject=d
        this.details()

    }
    //method
    details(){
        console.log(`student name is ${this.nname} and subject choosen is ${this.subject}`);
        
    }
}

//object
const objname=new Student('betty',15,'chemistry')

const objname1=new Student('poul',16,'biology')

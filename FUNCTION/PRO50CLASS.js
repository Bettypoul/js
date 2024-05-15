//[id, name, designation, location, salary, experience]

array=[1000,'Neel','developer','kochi',25000,3]

//oops

//class

class Employee{
    //property
    empname
    empdesi
    emplocation
    empsalary
    //constructor
    constructor(a,b,c,d){
        this.empname=a
        this.empdesi=b
        this.emplocation=c
        this.empsalary=d
    }
    //method
    display(){
        console.log(`employee name is ${this.empname} `);
    }
}

//object

const obj=new Employee('MAX','pharmacist','kerala',30000)
obj.display()
const obj1=new Employee('MArshal','pharmacist','kerala',30000)
obj1.display()

//rest operator//RETURNS ARGUMENTS AS ARRAY

class A{
    methoda(...arg){
        console.log(arg);
        console.log(arg.reduce((n1,n2)=>n1+n2));
    }
}

const obj=new A()
obj.methoda(5,7)
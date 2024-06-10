//polymorphism 
//method over loading
//js doesnt support this method

class A{
    methoda(){
        console.log('first method');
    }
    methoda(n){
       
        console.log(`second  method with argument ${n}`);
    }
    methoda(n,m){
        console.log(`third method with argument ${n} and ${m}`);
    }
}

const obj=new A()
obj.methoda()


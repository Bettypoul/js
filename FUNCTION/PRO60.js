//MULTILEVEL INHERITENCE

class A{
    methoda(){
        console.log('inside methoda function');
    }
}

class B extends A{
    methodb(){
        console.log('inside methodb function');
    }
}

class C extends B{
    methodc(){
        console.log('inside methodc function');
    }
}

//object created for class C

const obj= new C()

obj.methodc()
obj.methodb()
obj.methoda()
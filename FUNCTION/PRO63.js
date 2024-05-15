//overriding

class A{
    methoda(){
        console.log('inside first method');
    }
}

class B extends A{
    methoda(){
        console.log('inside second method');
    }
    methoda(){
        console.log('INSIDE THIRD METHOD');
    }
}

const object=new B()
object.methoda()
//pillar of loop

//inheritance

class Parent{
    bike(){
        console.log('bike name is duke');
    }
}

class Child extends Parent{

}

//object created for child

const object=new Child()

//display
object.bike()//here bike()is a method inside parent but using inheritence we can access properties inside parent class to child class
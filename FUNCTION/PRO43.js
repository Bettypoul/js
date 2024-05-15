var car={
    name:'boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10 lakhs'


}

//w.a.p to print model and manufacturer name of the given car

console.log(car.model);
console.log(car.manufacturer);
//or
console.log(`model is ${car["model"]} and manufacturer is ${car["manufacturer"]}`);
console.log('---------------------------------------');

//w.a.p to add varient key to the car object with value as 'manuel'//in order to store more than one value in varient, value should be given as an array

car['varient']=['manuel']
console.log(car);
console.log('------------------------------------------');

//w.a.p to add a new value'automatic' to the key varient
car.varient.push('automatic')
console.log(car);
console.log('------------------------------------------');



//w.a.p to add a new key as 'color' with value as red , blue and white
car["color"]=['red']

car.color.push('blue','white')
console.log(car);
console.log('------------------------------------------');
//or
car["color"]=['red','blue','white']
console.log(car);


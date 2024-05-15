//OBJECT
//[id, name, designation, location, salary, experience]
//
array=[1000,'Neel','developer','kochi',25000,3]

object={id:1000,name:'Neel',designation:'developer',location:'kochi',salary:'25000',experience:'3'}
//for displaying
console.log(array);
console.log(object);
// to access VALUE

console.log(array[2]);
console.log(object['designation']);
//or
console.log(object.designation);

//to know data type
console.log('-----------------------------');

console.log(typeof(array));
console.log(typeof(object));
console.log('------------------------------');
//to access KEY from a object

for(key in object){
    console.log(key);
}
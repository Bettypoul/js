fruit=['apple','mango','orange','kiwi']
console.log('------------------------------');
//trial
console.log(fruit);//print as array

//print index position
for(index=0;index<fruit.length;index++){
    console.log(index);
}

console.log('------------------------------for');

//for//print names with in array

for(index=0;index<fruit.length;index++){
    console.log(fruit[index]);
}
console.log('------------------------------in');
//in//
for(let i in fruit){
    console.log(i);
}

console.log('------------------------------of');

//of
for(let i of fruit){
    console.log(i);
}

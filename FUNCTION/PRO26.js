//find()
//gives only first item that satisfy the condition
a=[10,12,15,13,25,2,3,5]
f=a.find(num=>num%2==0)
console.log(f);


fruit=['apple','pineapple','mango','orange','kiwi',]

// find mango in the given array
m=fruit.find(f=>f=='mango')
console.log(m);


console.log('--------------------------------------');
//is mango present in the given array

//**********//INCLUDES()
ma=fruit.includes('mango')
console.log(ma);
//or
console.log(ma?'present':'not present');


console.log('--------------------------------------');
///********** *//indexOf()

//find the index of mango
 man=fruit.indexOf('mango')
 console.log(man);

 //find index of kiwi

 k=fruit.indexOf('kiwi')
 console.log(k);
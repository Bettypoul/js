a=[10,11,12,13,14,15]
//w.a.p to find square of each element in the given array

//this will not give an array in return

for(num of a){
    sq=num**2
    console.log(sq);
}

//also can be done in this way to get an array but it is complicate

b=[]
for(num of a){
    squ=num**2
    b.push(squ)
   
}
console.log(b);

//give array in return with few step using map()

square=a.map(num =>num**2)
console.log(square);

console.log('---------forEach');
//forEach()
a.forEach(num => {
   console.log(num**2); 
});

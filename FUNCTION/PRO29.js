//slice()

a=[11,12,13,14,15,16,17,18,19,20]

console.log(a);

//create an array consisting of first 3 numbers from the given array

b=a.slice(0,3)
console.log(b);

//create a new array having the numbers 14,15,16,17
c=a.slice(3,7)
console.log(c);

//create a new array having the numbers 18,19,20
d=a.slice(7,10)
console.log(d);
//or
e=a.slice(7)
console.log(e);
//or
f=a.slice(-3)
console.log(f);
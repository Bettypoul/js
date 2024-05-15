//w.a.p to find the cube of a given number using map

op=[10,11,12,13,14,15]

cube=op.map(num=>num**3)
console.log(cube);

//w.a.p to create a new array with number <=13 increment by 1 and number>13 decrement by 1

b=op.map(num=>num<=13? num+1: num-1)
console.log(b);

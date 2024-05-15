//w.a.p to find even numbers from the given array

a=[[2,10],[50,25],[2,100],[7,66],[33,9]]


for(num of a){
    for(n of num){
        if(n%2==0){
            console.log(n);
        }
    }
}

console.log('-------another way');

//flat() convert array into the next lower level dimension

b=a.flat()
console.log(b);

for(number of b){
    if(number%2==0){
        console.log(number);
    }
}
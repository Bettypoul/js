//whether a given number is positive or negative
n=-10
if(n>0){
    console.log("it is a positive number");
}
else if(n==0){console.log('neither positive nor negative');}
else{console.log('it is a negative number');}


console.log('------------');
//another way
n>0?console.log("it is a positive number"):n==0?console.log('neither positive nor negative'):console.log('it is a negative number')
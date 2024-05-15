//when a number is divisible by 3 give fizz(reminder should be zero)
//when a number is divisible by 5 give buzz
//when a number is divisible by 15 give fizzbuzz

x=15

if(x%15==0){

    console.log(`fizz buzz fizzbuzz`)
}
else if(x%5==0){
    console.log(` buzz`)
}
else if(x%3==0){
    console.log(` fizz`)
}
else{
    console.log(`${x}not divisible by 15,5 and 3`)
}



//-------------------


num=33
if(num%15==0){
    console.log('fizzbuzz');
}
else if(num%5==0){
    console.log('buzz');
}
else if(num%3==0){
    console.log('fizz');
}
else{console.log('not divisible by 3, 5 and 15');}
//w.a.pto find given number is positive or negative using function

function positive(num){
    if(num>0){console.log(`${num} is a positive number`);}
    else{console.log(`${num} is a negative number`);}
}
 
positive(-10)


console.log('--------');

function pn(n){
    return n>0?'positive':'negative'
}
console.log(pn(10));

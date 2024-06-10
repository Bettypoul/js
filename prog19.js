//   2      3       4    (input)
// 24       369      4936 (output)


//2*12     3*123     4*1234 //possible patterns

n=3//(input)

i=1
str=''
// result=0
while(i<=n){//1<=2//2<=2//3<=2 ( loop exit)
str=str+i//''+1=1//'1'+2=12
i++//2//3
}
result=str*n
console.log(result);



console.log('------------');


//2+22    3+33+333    4+44+444+444 //possible pattern no;2

m=3

j=1
string=''
sum=0
while(j<=m){//1<=3//2<=3//3<=3
    string=string+m//''+3='3'//'3'+3=33//'33'+3="333"
    sum=Number(string)+sum//3+0=3//33+3=36///333+36=369
    j++//2//3//
}

console.log(sum);








//---------------------------




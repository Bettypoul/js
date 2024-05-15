//find the reverse of a given number using while loop     // when a given number is divided by 10 the remainder will be the last number and the QUOTIENT will be the number with decimal point before the last digit

num=123   //print 321
// remainder=0 
reverse=0

while(num>0){//123>0//12>0//1>0
remainder=num%10//123%10=3//12%10=2//1%10=1
reverse=(reverse*10)+remainder//0*10+3=3//3*10+2=32//32*10+1=321
num=Math.floor(num/10)//123/10=12//12/10=1//1/10=.1
}
console.log('reverse of the given number is',reverse);



//check whether a given number is palindrome or not eg;121 in reverse also it gives 121

num=121
// remainder=0 
reverse=0
temp=num

while(num>0){//121>0//12>0//1>0//.1>0
remainder=num%10//121%10=1//12%10=2//1%10=1
reverse=(reverse*10)+remainder//0*10+1=1//1*10+2=12//12*10+1=121
num=Math.floor(num/10)//121/10=12//12/10=1//1/10=.1
}

if(temp==reverse){
    console.log('palindrome');
}
else{
    console.log(' Not palindrome'); 
}
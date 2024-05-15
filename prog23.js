// whether given three digit number is armstrong or not// 
//153=1**3+5**3+3**3=153

num=153
 


temp=num
// remainder=0
sum=0
while(num>0){//153>0//15>0
   
    remainder=num%10//153%10=3//15%10=5//1>0//0>0  
    sum=sum+remainder**3//0+3**3=27//27+5**3=152//152+1**3=153
    num=Math.floor(num/10)//153/10=15//15/10=1//1/10=0.1
    

}
if(temp==sum){
    console.log('armstrong');
}
else{
    console.log('not armstrong');
}
//------------------//
//1634    1**4+6**4+3**4+4**4=1634
console.log('-----------------------------');

num=1634
 
power=(num+'').length// (1634+string).lenth=4 ie length of 1634
// console.log(power);
temp=num
// remainder=0
sum=0
while(num>0){//1634>0//163>0//16>0//1>0//
   
    remainder=num%10//1634%10=4//163%10=3//16%10=6//1%10=1
    sum=sum+remainder**power//0+4**4=256//256+3**4=337//337+6**4=1633//1633+1**4=1634
    num=Math.floor(num/10) //1634/10=163//163/10=16//16/10=1//1/10=0.1
    

}
if(temp==sum){
    console.log('armstrong');
}
else{
    console.log('not armstrong');
}




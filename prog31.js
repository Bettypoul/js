//w.a.p to display all armstrong numbers between 8 to 500(refer vijinazzz prog)

for(num=8;num<=500;num++){//153<=500
    //to get number of digits in a number  
    power=(num+'').length//3
    sum=0
    temp=num
    if(power!=1){
        while(temp>0){//153>0//15>0
            remainder=temp%10//153%10=3//15%10=5
            sum=sum+remainder**power//3**3=27//27+5**3
            temp=Math.floor(temp/10)//153/10=15
        }
    }
    // else{
    //     sum=0
    // }
    if(sum==num){
        console.log(num);
    }
}






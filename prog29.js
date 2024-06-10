//nested loop



//display all prime number from 2 to 50


for(i=2;i<=50;i++){//3<=50
    let flag=0                   //indicate true statement//prime number
    for(j=2;j<i;j++){//2<3
        if(i%j==0){
            flag=1              //indicate not a prime number
            break
        }
    }
    if(flag==0){  
        console.log(i);
    }
}


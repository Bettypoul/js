//a=[10,20,30,20,30,40,50,60,10]// apr 3 2024
// w.a.p to find the duplicte  numbers from the given array ie 10,20,30

a=[10,20,30,20,30,40,50,60,10]          // →THIS method is only applicable when a number repeat 2 times, if A num repeat more than twice same number will show thrice or more in the output so an alternative Method is given in PROG14.JS

isDuplication = false

// for(num of a) or
for(i=0;i<a.length;i++){//0<=9//1<=9...
    for(j=i+1;j<a.length;j++){//1<=9//2<=9//3<=9//4<=9//5<=9//6<=9//7<=9//8<=9
        if(a[i]==a[j]){//10==20//10==30//10==20//10==30//10==40//10==50//10==60//10==10
            isDuplication = true  
            console.log(a[i]);//10
        }
    }
}
!isDuplication &&console.log('no duplication');

//truthy operator




    
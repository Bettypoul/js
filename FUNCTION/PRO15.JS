// W . A.P TO PRINT PAIrS WHOSE SUM IS 6// apr 4

b=[2,3,4,5]
sum=6
nopair=false

for(i=0;i<b.length;i++){
    for(j=i+1;j<b.length;j++){
        if(b[i]+b[j]==sum){
            nopair=true
            console.log(`(${b[i]},${b[j]})`);
        }
    }
}
!nopair && console.log('no such pair');


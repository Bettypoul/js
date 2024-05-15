//find the lowest expense
//find the highest expense
//find the total expense

expense=[12000,24000,35000,10000,54000,40000]
//total expense
sum=0
for(i of expense){
sum=sum+i

}
console.log(sum);
console.log('-----------highest');
//highest

highest=expense[0]
for(let num of expense){
    if(num>=highest){
        highest=num
    }
 
}
console.log(highest);
console.log('-----------lowest');


//lowest

lowest=expense[0]
for(let num of expense){
    if(num<=lowest){
        lowest=num
    }
 
}
console.log(lowest);


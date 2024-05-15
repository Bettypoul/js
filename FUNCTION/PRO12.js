arr=[10,11,12,3,2,4]

//w a p to check whether 2 is present or not //LINEAR SEARCH
x=false
count=0 //to know number of iteration
for(let num of arr){
   count++ //to know number of iteration
    if(num==2){
        x=true
        break
    }
    
}
console.log(count); ////to know number of iteration
x==true?console.log('present'):console.log(' not present');
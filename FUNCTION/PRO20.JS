//BINARY

//W . A.P TO PRINT PAIrS WHOSE SUM IS 6//

b=[2,3,4,5]

pairsum=6

low=0
up=b.length-1
pair=false
while(low<up){
    currentsum=b[low]+b[up]
    if(currentsum==pairsum){
        pair=true
        console.log(`(${b[low]}, ${b[up]})`);
        low++
    }
    else if(currentsum<pairsum){
        low++
    }
    else{
        up--
    }
}

!pair && console.log('no such pair');
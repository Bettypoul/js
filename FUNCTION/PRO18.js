//binary search
//w a p to check whether 2 is present or not


arr=[10,11,12,3,2,4]

//sort the given array in ascending order

arr.sort((a,b)=>a-b)
// console.log(arr);

//iten to search
searchitem=2
//initialize low and up

low=0
up=arr.length-1

present=false
// count=0 //to know number of iteration

//
while(low<=up){
    // count++ //to know number of iteration
    mid=Math.floor((low+up)/2)
    if(arr[mid]==searchitem){
        present=true
        break
    }
    else if(arr[mid]<searchitem){
       low=mid+1
    }
    else{
       up=mid-1
    }

}
// console.log(count);  //to know number of iteration
console.log(present?'present':'not present');
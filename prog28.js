//w.a.p to check the given number is prime number or not
// a number that can only be divided by itself and 1 without remainders.
num=20
x=true

    for(i=2;i<num;i++) { 
    if(num%i==0) { 
      
        x=false
        break
       }
   
  }
    
   
     
         
  
     x?console.log('PRIME'):console.log('NOT PRIME');


// if(x){
//     console.log(`${num} is a prime number`);
// }
// else{
//     console.log(`${num} is  not a prime number`);
// }

//
console.log('----------');



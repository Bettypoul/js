//find second largest among 3 number and arrange in decending order
n1=300
n2=200
n3=500
if(n3>n1){
    if(n1>n2){console.log(`${n1} is the second largest number`); 
     console.log(`descending order is ${n3},${n1},${n2}`);}
   
    else{console.log(`${n2} is the second largest number`);
    console.log(`descending order is ${n3},${n2},${n1}`);
}
    
}
else if(n1>n2){
    if(n2>n3){console.log(`${n2} is the second largest number`);
console.log(`descending order is ${n1},${n2},${n3}`);}
else{console.log(`${n3} is the second largest number`);
console.log(`descending order is ${n1},${n3},${n2}`);}
}


else{console.log(`all are same`);
    
}
   

     




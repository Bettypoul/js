// w.a.p to find the duplicte  numbers from the given array   //this prog have lot of doubts so rewrite as new prog is below

a=[10,10,20,30,20,30,40,50,60,10] //apr 4//BEGINNING and  AGAIN REPEATED at 10.24AM
b=[]
for(i=0;i<=a.length-1;i++){//0<=9
    for(j=i+1;j<=a.length-1;j++){//1<=9
        isDuplication=true//TRUE
        if(a[i]==a[j]){//10==10
            //VARIABLE INITIALIZATION
            isDuplication = false//FALSE
            //CHECKING WHETHER THE NUMBER IS THERE IN OUTPUT ARRAY
            
            for(k=0;k<=b.length-1;k++){
                if(a[i]==b[k]){
                    isDuplication=true
                    break   
                }
            }
                if(!isDuplication){//NOT present in output array the number is added to the output array
                    b.push(a[i])
                }
            }


           
        }
    }
    b.length==0?console.log('no duplicATION'):console.log(b);





    console.log('-----------------------****************************or');

    //w.a.p to find duplication in the given array


let a = [10, 20, 30, 20, 30, 40, 50, 60, 10, 10, 20]
let b = [];

for (let i = 0; i < a.length; i++) { // Iterate through each element in array 'a'
    let isDuplication = false; // Assume no duplication initially

    for (let j = i + 1; j < a.length; j++) { // Check for duplicates in the rest of the array
        if (a[i] == a[j]) { // If a duplicate is found
            isDuplication = true; // Set flag to true

            for (let k = 0; k < b.length; k++) { // Check if this duplicate is already in 'b'
                if (a[i] == b[k]) {
                    isDuplication = false; // If it's already in 'b', set flag to false
                    break; // Break out of the loop//break is not mandatory here    
                }
            }

            if (isDuplication) { // If it's a unique duplicate
                b.push(a[i]); // Push the number to 'b'
            }
        }
    }
}

// After the loops, check if 'b' is empty
if (b.length == 0) {
    console.log('no duplicATION'); // If 'b' is empty, log 'no duplication'
} else {
    console.log(b); // Otherwise, log the contents of 'b'
}



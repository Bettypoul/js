// w.a.p to find the duplicte  numbers from the given array   //this prog have lot of doubts so rewrite as new prog in home work progg22.js

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




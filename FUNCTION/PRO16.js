//w.a.p to print common numbers from a given arrays    //11,20,30 //linear search
p=[10,11,12,20,30]
q=[11,20,25,30,33]

// for(i=0;i<p.length;i++){
//     for(j=0;j<q.length;j++){
//        if( p[i]==q[j]){
//         console.log(p[i]);

//        }
//     }
    
// }

isfound=false
for(i of p){
    for(j of q){
       if(i==j){
        isfound=true
        console.log(i);

       }
    }
    
    
}
!isfound && console.log('no common numbers');

// w.a.p to find the duplicte  numbers from the given array

a=[10,20,30,20,30,40,50,60,10,10,20,30]

c=[]
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j] && !c.includes(a[i])){// !c.includes checks whether the value of a[i] is already present in the c array.
            c.push(a[i])
            break

        }
    }
}
console.log(c);

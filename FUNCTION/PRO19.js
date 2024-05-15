//w.a.p to print common numbers from a given arrays    //11,20,30 //binary method
p=[10,11,12,20,30]
q=[11,20,25,30,33]

//index of p
a=0

//index of q

b=0

duplication=false

while(a<p.length && b<q.length){
    if(p[a]==q[b]){
        duplication=true
        console.log(p[a]);
        a++
        b++

    }
    else if(p[a]<q[b]){
        a++
    }
    else{
        b++
    }
}

! duplication && console.log('not present');
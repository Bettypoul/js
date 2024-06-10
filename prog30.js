//pattern printing

// # # # #
// # # # #
// # # # #
// # # # #

//w.a.p to print the givden pattern
console.log('-------0');
for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+"#"
    }
    console.log(str);
}


console.log('-------1'); 
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+row
    }
    console.log(str);
}


console.log('-------2');
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=4;col++){
        str=str+col
    }
    console.log(str);
}
console.log('------3');
// *
// * *
// * * * 
// * * * *

for(row=1;row<=4;row++){//1<=4//2<=4//3<=4//4<=4
    str=''//''//''//''
    for(col=1;col<=row;col++){//1<=1//2<=1(cndtn brk)//1<=2//2<=2//3<=2(cndtn brk)//1<=3//2<=3//3<=3//4<=3(cndtn brk)
        str=str+'*'+' '   //+' '--> to get space inbetwwen//''+*=*//////''+*=*//*+*=**//////''+*=*//*+*=**//**+ *=***////
    }
   console.log(str); //*
}




console.log('-------------4');

//1
//2 2
//3 3 3
//4 4 4 4

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+row//if  we want same value eg; 1 1 1 in row give row
    }
    console.log(str);
}

console.log('-------5');
// 1
// 12
// 123 
// 1234

for(row=1;row<=4;row++){//1<=4//2<=4// 
    str=''//''//''
    for(col=1;col<=row;col++){//1<=1//2<=1///1<=2//2<=2//3<=2
        str=str+col//if  we want same value eg; 1 1 1 in col give col//''+1=1//''+1=1//'1'+2=12
    }
    console.log(str);1//12//
}

console.log('-------6');

//* * * *
//* * * 
//* * 
//* 

for(row=1;row<=4;row++){//1<=4
    str=''//''
    for(col=row;col<=4;col++){
        str=str+'* '
    }
    console.log(str);
}
console.log('-------or');

//* * * *
//* * * 
//* * 
//* 

for(row=4;row>=1;row--){//4>=1//3>=1//2>=1
    str=''//''//''//''
    for(col=1;col<=row;col++){//1<=4//2<=4//3<=4//4<=4//5<=4(false)//1<=3//2<=3//3<=3//4<=3//1<=2
        str=str+'* '//''+*=*//*+*=**//**+*= ***//***+ *=****///''+*=*//*+*=**//**+*=***//''=*=*
    }
    console.log(str);//****//***/
}



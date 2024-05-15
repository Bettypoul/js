// * 
// * *
// * * * 
// * * * * 
// * * * * *
// * * * * 
// * * * 
// * * 
// * 

for(row=1;row<=5;row++){
    str=''
    for(col=1;col<=row;col++){
        str=str+'* '
        
        
    }
    console.log(str);
}
for(row=4;row>=1;row--){
    str=''
    for(col=1;col<=row;col++){
        str=str+'* '
        
        
    }
    console.log(str);
}


console.log('------- triangle');//(26 mar 9.30am)

//   *
//  * *
// * * *
//* * * *

for(row=1;row<=4;row++){//1<=4//
    str=''  //''//

    for(space=4;space>row;space--){//4>1//3>1//2>1//1>1(exit)
        str=str+' '//space within string//''+#(space)=#//##//###
        
    }
    for(col=1;col<=row;col++){//1<=1
        str=str+'* '//star &space//###*#
        
    }
    console.log(str);
}

//HW
console.log('------------diamond');

//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * * 
//   * *
//    * 






for(row=1;row<=9;row++){//1<=9//
    str=""//''
    if(row<=5)//1
    {for(spa=5;spa>=row;spa--){
        str+=" "
    }
    for(col=1;col<=row;col++){
        str+=" *"
    }
}
else{
    for(spa=5;spa<=row;spa++){
        str+=" "
    }
    for(col=9;col>=row;col--){
        str+=" *"

    }
}
console.log(str);
    
}









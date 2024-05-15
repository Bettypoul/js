//    *
//   * *
//  * * *
// * * * *

for(row=1;row<=4;row++){
    str=''
    for(space=4;space>=row;space--){
        str=str+' '
        
    }

    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}

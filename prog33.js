console.log('------------void triangle');//(mar 26 10.06am)

//      *
//    *   *
//  *       *
//* * * * * * *

for(row=1;row<=4;row++){//1<=4
    str=''//''
   
    for(col=1;col<=7;col++){//1<=7
      if(col+row==5 || col-row==3 || row==4) {//1+1=2(first s//1+4=5
        str=str+'*'//'*'
      }
      else{
        str=str+' '
      }
}
console.log(str);//###*###(first row)
}



console.log('-------void square');


// * * * * *
// *       *
// *       *
// *       *
// * * * * *



for(row=1;row<=5;row++){
    str=''
   
    for(col=1;col<=5;col++){
      if(col==5 || col==1|| row==1 || row==5) {
        str=str+'*'
      }
      else{
        str=str+' '
      }
}
console.log(str);
}



//1
//0 1
//1 0 1
//0 1 0 1

for(row=1;row<=4;row++){
    str=''
    for(col=1;col<=row;col++){
        
        if((row+col)%2==0){
            str=str+"1 "
           
        }
        else{
            str=str+'0 '
        }

      
    }
    console.log(str);
   
}
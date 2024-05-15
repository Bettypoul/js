//23 april

array=[10,20,30,40,30,20,50,30,60,70,10,40,80]

//w.a.p to find the number count from the given array and display as an object

object={}
array.forEach(element => element in object?object[element]+=1:object[element]=1
    
);
console.log(object);

console.log('-----------or');
object={}
for(num of array){
  if(num in object){
    object[num]+=1
  }  
  else{
    object[num]=1
  }
}
console.log(object);


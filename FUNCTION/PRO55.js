//Write a JavaScript program that returns a subset of a string.
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]

output=[]

function subsetstring(string){
    for(i=0;i<string.length;i++){//0<3//1<3//2<3
        for(j=i+1;j<=string.length;j++){//1<=3//2<=3//3<=3///2<=3//3<=3//3<=3
            output.push(string.slice(i,j))//(0,1)d//(0,2)do//(1,3)dog//(1,2)o//(1,3)og//(2,3)g
        }
    }
    console.log(output);
}
subsetstring('dog')

console.log('-------------or');
str='dog'
result=[]
a=str.substring(0,1)
b=str.substring(0,2)
c=str.substring(1,2)
d=str.substring(1)
e=str.substring(2)
result.push(a,b,str,c,d,e)
console.log(result);















































































text='hai hello all hello world all'
//w.a.p to print the word count from the given string

//object={'hai':1,'hello':2,'all':2,'world':1}

//algorithm
//1) covert text into array of words.
//2)create a new empty object.
//3)fetch each words from the array.
//4)check each word is present in the created object.
//5)if present increment the count.
//6)else add a new key:value to object
//7)display object

words=text.split(' ')
//console.log(words);

object={}

for(word of words){
    if(word in object){
       object[word]+=1
    }
    else{
       object[word]=1
    }
  
}
console.log(object);

console.log('-------------array method');

obj={}
text.split(' ').forEach(element => element in obj?obj[element]+=1:obj[element]=1
    
);
console.log(obj);

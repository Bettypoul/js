sentance='good morning all'

//w.a.p to print all vowels in the given sentence[a,e,i,o,u]
sentance1=sentance.split('')
console.log(sentance1);
vow=sentance1.filter(vowels=>vowels=='a'||vowels=='e'||vowels=='i'||vowels=='o'||vowels=='u')
console.log(vow);


console.log('---------------------or');
str=sentance.split('')
console.log(str);

vowel=['a','e','i','o','u','A','E','I','O','U']

for(letter of str){
    for(letterr  of vowel){
        if(letter==letterr){
            console.log(letter);
        }
    }

}
console.log('-----');

for(character of str){
    if(vowel.includes(character)){
        console.log(character);
    }
}

console.log('------------OR');

str1=str.filter(char=>vowel.includes(char)).forEach(element => {console.log(element);
    
});
// console.log(str1);

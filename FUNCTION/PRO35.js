//*******slice
str='luminar'
str1=str.slice(1,4)
console.log(str1);

str2=str.slice(-5)
console.log(str2);

//*******split
console.log('----------split');
stri='luminar technolab'
stri1=stri.split(' ')
console.log(stri1);
console.log('----------------');
stri2=stri.split('')
console.log(stri2);

//********replace
console.log('----------------REPLACE');

string='I joined microsoft, but the office of microsoft is too far'
//microsoft replace as google

string1=string.replace('microsoft','google') //this only replace first matching word
console.log(string1);
//**************************************************************************** */

string='I joined microsoft, but the office of microsoft is too far'


string1=string.replaceAll('microsoft','google') //replaceAll will replace all matching words
console.log(string1);

//REMOVE SPACE BETWEEN WORDS
s='hello world'
st=s.replace(' ','')
console.log(st);
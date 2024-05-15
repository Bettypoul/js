//****************//
string='hello'
console.log(string[3]);

//w.a.p to check the given string is palindrome or not

str='malayalam'
start=0
end=str.length-1
palindrome=true
while(start<end){
    if(str[start]!=str[end]){
        palindrome=false
    }
    start++
    end--
}
console.log(palindrome?'palindrome':'not palindrome');

//another method using for loop

str1='malayalam'
pal=''
for(i=str1.length-1;i>=0;i--){//9>=0//8>=0
  pal=pal+str1[i]//''+m//m+a



}
console.log(pal==str1?'palindrome':'not palindrome');

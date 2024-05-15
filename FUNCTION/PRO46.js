pattern='ABCBBCAACB'
//W.A.P  to find the first recursive(REPEATING) letter (ans:B)
object={}
character=Array.from(pattern)
//console.log(character);

for(char of character){
    if(char in object){
        console.log(char);
        break
    }
    else{
        object[char]=1
    }
}






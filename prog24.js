//display numbers ,whose exponential is in the range of 8-36 . where user can input power  value
// user input power2=> 1(1**2) 4(2**2) "9(3**2) 16(4**2) 25(5**2) 36(6**2)" 49 = 3 4 5 6
//user input power3=> 1(1**3) "8 (2**3) 27(3**3)" 64(4**3) 125(5**3) 216 = 2 3





power=2 // user input
// low=8
// up=36
num=1
while(num<=36)//1<=36//2<=36//3<=36
{
    if(8<=num**power && 36>=num**power){//8<=3**2=9//
console.log(num);

}
num++
}
//-----------------------------------------------//
console.log('----------');

power=2 // user input
low=8
up=36
num=1
while(num<=36)
{
    if(low<=num**power && num**power<up){
console.log(num);
}
num++
}
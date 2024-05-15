//Sample data with nested arrays 
const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];
array=data.flat()
console.log(array);
console.log("--------------------------------- 1)Find the sum of all numbers in the nested arrays.");

sum=array.reduce((n1,n2)=>n1+n2)
console.log(`sum of the given numbers is ${sum}`);
console.log("----------------------------------2) Find the MAXIMUM NUMBER (HIGHEST NUMBER) in the entire nested array.");
max=array.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);


console.log("----------------------------------3) Find the average of all numbers in the nested arrays.");
average=array.reduce((n1,n2)=>n1+n2)/(array.length)
console.log(`average is ${average}`);

console.log("----------------------------------4) Find square of each number in the nested arrays.");
square=array.map(ele=>ele**2)
console.log(square);
console.log('-----or (nested');
sq=data.map(ele=>ele.map(n1=>n1**2))
console.log(sq);

console.log("---------------------------------- 5) Find all even numbers from the nested arrays.");
even=array.filter(item=>item%2==0)
console.log(even);

console.log("----------------------------------6) Use reduceRight to concatenate all nested arrays in reverse order.");

concatenate=array.reduceRight((n1,n2)=>''+n1+n2)//The '' before N1 ensures that the numbers are treated as strings, preventing them from being added numerically.
console.log(concatenate);
console.log('-----or');
concat=data.reduceRight((num1,num2)=>num1.concat(num2))
console.log(concat);

console.log("----------------------------------7) create a flattened array from the nested arrays.");
array=data.flat()
console.log(array);

console.log("----------------------------------8) check if the number 5 is present in any of the nested arrays");
present=array.includes(5)
console.log(present?'present':'not present');
console.log('-----or');
p=data.some(item=>item.includes(5))
console.log(p);
console.log("----------------------------------9) create a single string of all numbers separated by a comma. ");


string = array.toString()
console.log(string);



console.log("----------------------------------10) Print each number in the nested arrays.");
array.forEach(element => {
   console.log(element); 
});

console.log('-----------OR');
data.map(num=>num.map(n=>n).forEach(ele=>console.log(ele)))

console.log("----------------------------------11) Sort the nested arrays based on the sum of their numbers.");

sumnested=data.map(ele=>ele.reduce((n1,n2)=>n1+n2,0))
console.log(sumnested);
console.log("----------------------------------12) Use map to get the product of the first and last number in each nested array.");
product=data.map(ele=>ele[0]*ele[ele.length-1])
console.log(product);



console.log("----------------------------------13) Use filter to get all arrays where the sum of numbers is greater than 15.");
greater=data.filter(item=>item.reduce((n1,n2)=>n1+n2)>15)
console.log(greater);

console.log("----------------------------------14) Use reduce to find the product of all numbers in the nested arrays.");
product=array.reduce((n1,n2)=>n1*n2)
console.log(product);
console.log('------or');
prod =data.map(ele=>ele.reduce((n1,n2)=>n1*n2))
console.log(prod);
console.log("----------------------------------15) create an array of square roots of all numbers in the nested arrays.");
squareroot=data.map(ele=>ele.map(value=>Math.sqrt(value)))
console.log(squareroot);

console.log("----------------------------------16) Use includes to check if the number 20 is present in any of the nested arrays.");
present=array.includes(20)
console.log(present?'present':'not present');
console.log('----or');
check=data.some(ele=>ele.includes(20))
console.log(check?'present':'not present');
console.log("----------------------------------17) Use map to convert each number in the nested arrays to its string representation.");
string=array.map(ele=>ele+'')
console.log(string);
console.log('--------or');
str=data.map(ele=>ele.map(item=>item+''))
console.log(str);


console.log("----------------------------------18) Use filter to get all arrays where the length is greater than 2");
a=data.filter(ele=>ele.length>2)
console.log(a);

console.log("----------------------------------19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.");
con=data.reduceRight((n1,n2)=>n1.concat(n2)).sort((num1,num2)=>num2-num1)
console.log(con);

console.log("----------------------------------20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.");
squareeven=Array.from(data).flat().filter(ele=>(ele%2==0)).map(n=>n**2)
console.log(squareeven)

console.log("----------------------------------21) Sort the nested arrays based on the length of each array.");

sort=data.sort((n1,n2)=>n1.length-n2.length)
console.log(sort);

console.log("----------------------------------22) Use map to convert each number in the nested arrays to its negative.");
negative=data.map(ele=>ele.map(item=>item*-1))
console.log(negative);

console.log("----------------------------------23) Use filter to get all arrays where the last number is greater than 10.");
last=data.filter(ele=>(ele[ele.length-1])>10)
console.log(last);

// console.log("----------------------------------***********24) Use reduceRight to get the difference between consecutive numbers in each nested array.");

console.log("----------------------------------25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.");
root=Array.from(data).flat().filter(ele=>ele%2==0).map(item=>Math.sqrt(item))
console.log(root);



console.log("---------------------------------- 26) Use includes to check if the number 15 is present in any of the nested arrays.");
include=data.some(ele=>ele.includes(15))
console.log(include?'present':'not present');

console.log("----------------------------------27) Use map to convert each number in the nested arrays to its absolute value.");
absolute=data.map(ele=>ele.map(value=>Math.abs(value)))
console.log(absolute);

console.log("----------------------------------28) Use filter to get all arrays where the first number is less than 5.");

less=data.filter(ele=>ele[0]<5)
console.log(less);

console.log("----------------------------------29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.");
c=data.reduceRight((n1,n2)=>n1.concat(n2)).sort((n1,n2)=>n2-n1)
console.log(c);

console.log("----------------------------------30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.");

n=Array.from(data).flat().filter(value=>value>5)
console.log(n);








































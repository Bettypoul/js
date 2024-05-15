//Sample data with mixed types in nested arrays
const mixedData = [
  [1, 'apple', 3, 'banana'],
  [4, 'orange', 6, 'grape'],
  [7, 'pear', 9, 'kiwi'],
  [10, 'melon', 12, 'strawberry']
];


console.log('-------------------------1) Use map to create an array of strings containing both the type and value of each element.');


console.log('-------------------------2) Use filter to get all arrays where the number of strings is greater than the number of numbers');


console.log('------------------------- 3) Use reduce to concatenate all strings in the nested arrays into a single sentence.');


console.log('-------------------------4) Use arrayFrom to create an array of unique strings from the nested arrays.');

console.log('------------------------- 5) Use sort to sort the nested arrays based on the length of strings in each array.');

console.log('------------------------- 6) Use map to convert each string in the nested arrays to its uppercase form.');

a=mixedData.map(ele=>ele.map(item=>typeof(item)=='string'?item.toUpperCase():item))
console.log(a);

console.log('------------------------- 7) Use filter to get all arrays where the sum of numbers is greater than 20.');



console.log('-------------------------8) Use reduceRight to concatenate and flatten all nested arrays in reverse order.');
con=mixedData.reduceRight((n1,n2)=>n1.concat(n2))
console.log(con);

console.log('-------------------------9) Use arrayFrom to create an array of the lengths of all strings in the nested arrays.');

console.log('------------------------- 10) Use includes to check if the word apple is present in any of the nested arrays.');

z=mixedData.some(item=>item.includes('apple'))

console.log(z?'prsent':'not present');

//datastructure
//array
weekdays=['mon','tue','wed','thu']

//display

console.log(weekdays);


//total number of items in an array

console.log(weekdays.length);

//print wed from given array

console.log(weekdays[2]);    // index starts from zero and wednesday is in the 2nd position or index


//print thu

console.log(weekdays[3]);

//add friday to the given array

weekdays.push('fri')
console.log(weekdays);

//add 3 to the given array

weekdays.push(3)
console.log(weekdays);

//remove 3 from array(remove from end)

weekdays.pop()
console.log(weekdays);

//add sunday to the beggining of a given array

weekdays.unshift('sun')
console.log(weekdays);

// add a name in the beggining

weekdays.unshift('be')
console.log(weekdays);

//remove item from start

weekdays.shift()
console.log(weekdays);
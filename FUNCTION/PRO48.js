products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

console.log('-------------------print product name only--------------------');
//1. print product name only

for(pro of products){
    names=pro.pName
    console.log(names);
}
//or
console.log('-----------or');
products.forEach(pro => {
    console.log(pro.pName);
});
console.log('--------print all mobile details whose display is lcd----------');
//2. print all mobile details whose display is lcd
for(pro of products){
    if(pro.display=='lcd')
    console.log(pro);
}
console.log('-----------or');
products.filter(pro=>pro.display=='lcd').forEach(item=>console.log(item))

//3. print 5g mobile phone name
console.log('---------print 5g mobile phone name');



for(pro of products){
    if(pro.band=='5g'){
        console.log(pro.pName);
    }
}
console.log(('-----or'));
products.filter(pro=>pro.band=='5g').forEach(item=> console.log(item.pName))    




//4. sort mobile based on price
console.log('-----------sort mobile based on price');

products.sort((pro1,pro2)=>pro1.price-pro2.price).forEach(item=>console.log(item.pName))

//5. print costly mobile
console.log('-------- print costly mobile-');
costly=products.reduce((pro1,pro2)=>pro1.price>pro2.price?pro1:pro2)
console.log(costly.pName);


//6. print low cost mobile
console.log('--------print low cost mobile--');

low=products.reduce((pr1,pr2)=>pr1.price<pr2.price?pr1:pr2)
console.log(low.pName);
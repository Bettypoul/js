//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
console.log('-----display all product name');

products.forEach(name => {
    console.log(name[1]);
});
//or  if u want to display as an array use below method
a=products.map(name=>name[1])
console.log(a);

console.log('-----display product whose price < Rs.50');

b=products.filter(num=>num[2]<50).forEach(prod=>console.log(prod[1]))  //.foreach is used to remove nested array
// console.log(b);

console.log('-----print price of oreo******');
c=products.slice(2,3).forEach(produ=>console.log(produ[2]))
// console.log(c);


console.log('-------');
//or
oreo=products.find(pro=>pro[1]=='oreo')
console.log(oreo[2]);



console.log('----- print costly product name');
d=products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
console.log(d[1]);


console.log('----- display out of stock product');
e=products.find(stockout=>stockout[3]==0)
console.log(e);
//or
console.log('----');
item=products.filter(pr=>pr[3]==0).forEach(removearray=>console.log(removearray))
// console.log(item);

console.log('----- sort products based on stock in decsending order');

products.sort((n1,n2)=>n2[3]-n1[3]).forEach(itm=>console.log(itm[1]))


console.log('----- print product having maximum available stock');
g=products.sort((n1,n2)=>n2[3]-n1[3])
console.log(g[0]);
//or
console.log('---------------');
z=products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
console.log(z[1]);

console.log('----- is there any product can be purchased by Rs. 10');
h=products.some(ten=>ten[2]==10)
console.log(h?'yes':'no');


console.log('-----Is there any product in the range of 10 to 30');
i=products.some(tentothirty=>tentothirty[2]>=10 && tentothirty[2]<=30)
console.log(i?'yes':'no');

console.log('-----print all products in the range of 10 to 30');

j=products.filter(all=>all[2]>=10 && all[2]<=30).forEach(al=>console.log(al[1]))
//console.log(j);

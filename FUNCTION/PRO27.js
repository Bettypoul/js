//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]


//*** 
console.log('---------print all employee name '); 
employee.forEach(emp=> {console.log(emp[1]);
    
});
//or//returns array
z=employee.map(emp=>emp[1])
console.log(z);

//***
console.log('---------print total numbers of employee '); 

console.log(`total numbers of employee is ${employee.length}`);



//*** 
console.log('---------print developer employee details '); 

//filter returns an array, to change it use forEach
dev=employee.filter(emp=>emp[2]=='developer').forEach(pro=>console.log(pro))
// console.log(dev);


//*** 
console.log('--------- print details of employee Laisha');
//filter() returns an array if you dont want array can use foreach as below
lai=employee.filter(emp=>emp[1]=='Laisha')//.forEach(name=>{console.log(name);})
console.log(lai);

    
//*** 
console.log('-------print employee name whose salary >30000');

sal=employee.filter(emp=>emp[4]>30000).forEach(pro=>console.log(pro[1]))
// console.log(sal);







console.log('---------sort employee based on their salary in descending order '); 

d=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(d);



console.log('---------sort employee based on their experience in ascending order'); 

a=employee.sort((em1,em2)=>em1[5]-em2[5])
console.log(a);





console.log('---------print the employ name whose have the higest salary'); 

highest=employee.reduce((n1,n2)=>n1[4]>n2[4]?n1:n2)
console.log(highest[1]);

console.log('---------print the employ name whose have the lowest salary'); 

lowest=employee.reduce((n1,n2)=>n1[4]<n2[4]?n1:n2)
console.log(lowest[1]);

console.log('---------total salary expense of the company')

sum=employee.map(emp=>emp[4]).reduce((salary1,salary2)=>salary1+salary2)
console.log(sum);

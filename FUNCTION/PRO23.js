//nested array

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

for(emp of employee){
    console.log(emp[1]);
}

//***
console.log('---------print total numbers of employee '); 

console.log(`total numbers of employee is ${employee.length}`);
//or
number=employee.length
console.log(number);

//*** 
console.log('---------print developer employee details '); 

for(emp of employee){
    if(emp[2]=='developer'){
        console.log(emp);
    }
}


//*** 
console.log('--------- print details of employee Laisha');

    console.log(employee[4]);
    //or
console.log('----');
    for(emp of employee){
        if(emp[1]=='Laisha'){
            console.log(emp);
        }
    }
//*** 
console.log('-------print employee name whose salary >30000');

for (emp of employee){
    if(emp[4]>30000){
        console.log(emp[1]);
    }
}





console.log('---------sort employee based on their salary in descending order '); 

d=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(d);



console.log('---------sort employee based on their experience in ascending order'); 

a=employee.sort((em1,em2)=>em1[5]-em2[5])
console.log(a);





console.log('---------print the employ name whose have the higest salary'); 

sal=employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
console.log(sal[0][1]);














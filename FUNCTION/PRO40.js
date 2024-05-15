//w.a.p to check whether 'emplocation' key is present in the given object
employee={id:1000,
    name:'Neel',
    designation:'developer',
   location:'kochi',
    salary:'25000',
    
    }

    if('emplocation' in employee){//'emplocation' key in employee 
        console.log('present');
    }
    else{
        console.log('not present');
    }

    //or
    //console.log('emplocation' in employee?'present':'not present');

    console.log('-----------------------***************************');
    //add experience to the given object employee

    employee["experience"]=3
    console.log(employee);
    console.log('-----------------------***************************');
    //check 'gender' key in the given object employee, if present print 'yes' else add 'gender' keyto the given object with value as male
    

    if('gender' in employee){
        console.log('yes');
    }
    else{
        employee["gender"]="male"
        console.log(employee);
    }
    //or
    console.log('-------------------------------- ternary operator');
     'gender' in employee?console.log('yes'):(employee["gender"]="male", console.log(employee))
   
  

    
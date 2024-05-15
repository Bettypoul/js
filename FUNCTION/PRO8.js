//nested function

const global='global'

const parent =()=>{
    let parentvariable='PARENT'
    console.log(`PARENT VARIABLE IS ${parentvariable}`);
    //can't access  inside parent
    // console.log(`child VARIABLE IS ${childvariable}`);
    console.log(`global property is ${global}`);

    const child=()=>{
        let childvariable='child'
         //can access  inside child
        console.log(`PARENT VARIABLE IS ${parentvariable}`);
        console.log(`global property is ${global}`);

        console.log(`child VARIABLE IS ${childvariable}`);
     

    }
    child()
}

parent()

//call back function

//example1
function greet(name,callback){
    console.log(`hai ${name}`);
    callback()
}

function callme(){
    console.log('am a call back function');
}

greet('peter',callme)

//example2

//time is given in milli seconds

setTimeout(()=>{
    console.log('hello');
},5000)
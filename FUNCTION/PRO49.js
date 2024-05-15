accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('----------total number of accounts');

a=accounts.length
console.log(a);
console.log(('----------or'));
console.log(`total number of accounts is ${accounts.length}`);

//2. print account number whose ac_type is savings
console.log(('-------print account number whose ac_type is savings'));
for(acc of accounts){
    if(acc.ac_type=='savings'){
        console.log(acc.acno);
    }
}
//or
console.log('------------or');
acctype=accounts.filter(item=>item.ac_type=='savings').forEach(element => {
    console.log(element.acno);
});


//3.print the balance of accnount number 1000
console.log(('*------print the balance of accnount number 1000'));
for(acc of accounts){
    if(acc.acno==1000){
        console.log(acc.balance);
    }
}
console.log('--------or');
console.log(accounts.find(data=>data.acno==1000).balance)
console.log('*********');
accounts.filter(ele=>ele.acno==1000).forEach(ele=>console.log(ele.balance))

//4. print all gpay transactions
console.log(('-----------print all gpay transactions'));
accounts.map(data=>data.transaction).flat().filter(item=>item.mode=='gpay').forEach(trans=>console.log(trans))





//5. print all transaction whose amount > 5000
console.log('-----------print all transaction whose amount > 5000');
accounts.map(data=>data.transaction).flat().filter(item=>item.amount>5000).forEach(trans=>console.log(trans))

//6. print credit transaction of account 1002//watch rpt
console.log('------------- print credit transaction of account 1002');
credit=accounts.map(data=>data.transaction).flat().filter(item=>item.to==1002)
console.log(credit);

//7. print debit transaction of account 1002
console.log(('-------print debit transaction of account 1002'));
debit=accounts.find(data=>data.acno==1002).transaction
console.log(debit);
console.log('-----------or');
accounts.filter(item=>item.acno==1002).forEach(item=>console.log(item.transaction))

//8. print transaction history of 1002
console.log('-------------print transaction history of 1002');
history={}
history['credit']=credit
history['debit']=debit
console.log(history);
//spread(...)=>for combing two array
console.log('---or');
transhistory=[...credit,...debit]
console.log(transhistory);


//9. print highest balance account details
console.log('----------print highest balance account details');

high=accounts.reduce((n1,n2)=>n1.balance>n2.balance?n1:n2)
console.log(high);
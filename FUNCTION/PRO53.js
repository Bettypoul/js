//write methods for solving the given question

class Bank{
    //property
    accountdetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:50000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:5000},
        1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        1003:{acno:1003,username:'userfour',password:'userfour',balance:6000}
    }
//?validate a given account  number
//method
valid(acno){
    return acno in this.accountdetails?true:false
}
//?authenticate the account(acno,password)

authenticate(acno,pswd){
    if(this.valid (acno)){
        if(this.accountdetails[acno].password==pswd)//objectname[key].nestedkey=>this is to access the value of nestedkey,nestedkey is the property of the object that ,key points to
        {
        console.log('authentication success');}
        else{
            console.log('incorrect password');
        }


    }
    else{
        console.log('invalid account');

    }
}
//check  the balance
balance(acno,pswd){
    if(this.valid(acno)){
        if(this.accountdetails[acno].password==pswd){
            console.log(`balance of the account number ${acno} is ${this.accountdetails[acno].balance}`);
        }
        else{
            console.log('incorrect password');
        }

    }
    else{
        console.log('incorrect account number');
    }
}

//fund transfer

fundtransfer(fromacno,toacno,fpswd,amount){
    if(this.valid(fromacno)&& this.valid(toacno)){
        if(this.accountdetails[fromacno].password==fpswd){
            if(this.accountdetails[fromacno].balance>=amount){
                console.log(`balance of account number ${fromacno} is ${this.accountdetails[fromacno].balance} and balance of ${toacno} is ${this.accountdetails[toacno].balance} before fund transfer`);
                this.accountdetails[fromacno].balance-=amount
                this.accountdetails[toacno].balance+=amount
                console.log(`balance of account number ${fromacno} is ${this.accountdetails[fromacno].balance} and balance of account number ${toacno} is ${this.accountdetails[toacno].balance} after fund transfer`);

            }
            else{
                console.log('insufficient balance');

            }

        }
        else{
            console.log('invalid password');
        }

    }
    else{
        console.log('invalid account number');
    }
}


}









//************
//object

const obj1= new Bank()
console.log(obj1.valid(1003)?'valid':'invalid')
console.log('-------------------------------------');
obj1.authenticate(1000,'userone')
console.log('---------------------------------------');
obj1.balance(1002,'userthree')
console.log('--------------------------------------');
obj1.fundtransfer(1000,1001,'userone',100)
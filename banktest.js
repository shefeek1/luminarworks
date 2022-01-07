class Bank{       
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }
    session={}
    validateaccountNum(acno)
    {
        return acno in this.accounts?true:false
    }
    
    authenticate(acno,password)
     {
        if(this.validateaccountNum(acno))
        {
            let pwd=this.accounts[acno].password
            if(password==pwd)
            {
                console.log("Acess Granted");
                this.session["user"]=acno
            }
            else
            {
              console.log("Password Incorrect");
            }
        }
        else
        {
          console.log("Account doesn't exist");
        }
     }
    getbalance(acno)
    {
      return this.accounts[acno].balance;
    }
    balanceenquiry()
    {
        if(this.loginrequired())
        {
        let logduser=this.session["user"]
       // console.log(this.accounts[logduser].balance);
       let cr= this.getbalance(logduser)
       return cr;
       //return this.accounts[logduser].balance;
        }
        else
        {
             console.log("Sessiion is Invalid U must login");
        }
    }
    loginrequired()
     {
      return "user" in this.session?true:false  
     }
     fundtransfer(to_acn,amount)
      {
       if(this.loginrequired())
        {  
         let logeduser=this.session["user"]
       if(this.validateaccountNum(to_acn))
       {
         let curbalance=this.balanceenquiry()
         console.log(curbalance);
         if(curbalance<amount)
         {
             console.log("Insufficient Amount");
         }
         else
         {
           this.accounts[logeduser].balance-+amount;
           this.accounts[to_acn].balance+=amount;
           
           let crTrans={from:logeduser,amount:amount}
           let dbTrans={to:to_acn,amount:amount}
           this.accounts[logeduser].transactions.debitTransactions.push(dbTrans)
           this.accounts[to_acn].transactions.creditTransactions.push(crTrans)
           console.log("Transaction Completed");
         }
       }
       else
       {
          console.log(("Invalid Account Number"));
       }
      }
   
    else
    {
      console.log("Session Invalid U must login");
    }

}
}

obj1=new Bank()

//console.log(obj1.validateaccountNum(1002));
obj1.authenticate(1000,"userone")
console.log(obj1.session);
//obj1.balanceenquiry()
obj1.fundtransfer(1002,3000)

console.log(obj1.accounts[1000].transactions);
console.log(obj1.accounts[1002].transactions);

console.log(obj1.accounts[1002].balance);
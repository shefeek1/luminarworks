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
              console.log("Access Granted");
              this.session["user"]=acno
          }
          else
          {
              console.log("Password Incorrect");
          }
        }
        else
        {
            console.log("Account mismatch");
        }
    }
    getbalance(acno)
    {
        return this.accounts[acno].balance
    }
    balanceenquiry()
    {
        if("user" in this.session)
        {
            let logeduser=this.session["user"]
            console.log(this.getbalance(logeduser));
        }
        else
        {
            console.log("Session Invalid U must login");
        }
    }
     loginrequired()
     {
        return    "user" in this.session?true:false
     }

    fundtransfer(to_acn,amount)
        {
           if(this.loginrequired())
           {
               let logedusr=this.session["user"]
               if(this.validateaccountNum(to_acn))
               {
                  let curbalance=this.getbalance(logedusr)
                  //console.log(curbalance);
                  if(amount>curbalance)
                  {
                      console.log("Amount Insufficient");
                  }
                  else{
                      this.accounts[to_acn].balance+=amount;
                      this.accounts[logedusr].balance-=amount;
                      console.log("trnasaction completed");
                      let crTrans={from:logedusr,amount:amount}
                      let dbTrans={to:to_acn,amount:amount}
                      this.accounts[logedusr].transactions.debitTransactions.push(dbTrans)
                      this.accounts[to_acn].transactions.creditTransactions.push(crTrans)
                  }
               }
               else
               {
                   console.log("Invalid account number");
               }

           }
           else
           {
               console.log("Session Invalid U must login");
           }
            
        }
        loggeduser()
        {
             if(this.loginrequired())
             {
               return this.session["user"]
             }
        }
        getDebitTransaction()
        {
             let user=this.loggeduser()
             this.accounts[user].transactions.debitTransactions.forEach(element => {
              console.log(element);   
             });
        }
        getCreditTransaction()
        {
           // let user=this.loggeduser()
            let user=this.loggeduser()
             this.accounts[user].transactions.creditTransactions.forEach(element => {
              console.log(element);   
             });
             console.log( this.accounts[user].transactions.creditTransactions);
            
        }
        getTrnHistory(){
            let user=this.loggeduser()
            console.log(this.accounts[user].transactions);
        }
}
obj1= new Bank()
//console.log(obj1.validateaccountNum(1000));
 obj1.authenticate(1000,"userone")
 console.log(obj1.session);
 //obj1.balanceenquiry();
 obj1.fundtransfer(1002,2000)
var v=obj1.session["user"]
// console.log(obj1.accounts[1000].transactions);
// console.log(obj1.accounts[1002].transactions);
//console.log(obj1.accounts);
obj1.getTrnHistory();
obj1.getCreditTransaction();
obj1.getDebitTransaction();

   
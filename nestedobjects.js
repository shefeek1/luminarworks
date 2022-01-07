var users = {
        1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone",transactions:[
            {credittransaction:[]},
            {debittransaction:[]}
        ] },
        1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo" ,transactions:[
            {credittransaction:[]},{debittransaction:[]}
        ] },
        1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree",transactions:[
            {credittransaction:[]},{debittransaction:[]}
        ] },
        1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour",transactions:[
            {credittransaction:[]},{debittransaction:[]}
        ] },
    
    }
//nested objects cannot apply array methods like map(), filter() etc//

// console.log(users[1000]);
// console.log(users[1000].balance);
// console.log(users[1003].personName);
// console.log("1006" in users);

function authenticate(ac_num, password){
    {
        //chk accno exists
        if(ac_num in users)
        {
           //chk password//
            //console.log(" account exists");
            let pwd=users[ac_num].password
            if(pwd==password)
            {
              //  console.log("acess granted");
                return 1;
            }
            else{
                //console.log("password incorrrect");
                return -1;
            }
        }
        else{
           // console.log("Acount not exist");
            return 0;
        }
    }

}
//console.log(authenticate(1003,"userfour"));
function validateAccount(acno)
{
  return  acno in users?true:false
}
function fundtransfer(from_acno,to_acno,amount)
{
    if(validateAccount(from_acno) && validateAccount(to_acno))
    {
         console.log("Account exists");
        if(amount>users[from_acno].balance)
        {
            console.log("Insufficient Fund");
        }
        else{
          
            users[from_acno].balance-=amount;
            let from_bal=balanceEnquiry(from_acno)
            console.log(`Amount debited from account ${from_acno} with ${amount} and available balnce is ${from_bal}`);
            users[to_acno].balance+=amount;
            console.log("Amount credited");
            let to_bal=balanceEnquiry(to_acno)
            let crTrans={from:from_acno,amount:amount}
            let dbTrans={to:to_acno,amount:amount}
            users[to_acno].transactions[0].credittransaction.push(crTrans)
            users[from_acno].transactions[1].debittransaction.push(dbTrans)

        }
     }
    else{
        console.log("Account not exist");
    }

}
fundtransfer(1000,1003,3000)

//fundtransfer(1000,1002,2000)


//console.log(users);
function balanceEnquiry(acno)
{
    if(validateAccount(acno))
    {
    console.log("Fund Available =>", users[acno].balance);
    }
    else{
        console.log("Account invalid");
    }
}
// for(let data in users)
// {
//     console.log(users[data].transactions);

// }
console.log(users[1003].transactions[0].credittransaction);
console.log(users[1000].transactions[0].credittransaction);
console.log(users[1003].transactions[1].debittransaction);
console.log(users[1000].transactions[1].debittransaction);
// for(let data in users)
// {
//     for(let i in transactions)
//     {      
//     console.log(users[data].transactions[i].credittransaction);
//     }
// }
// //balanceEnquiry(1003);


var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  //total account number//
  console.log(accounts.length);

  //Q1 print all account number with savings type//
  
//var ac= accounts.filter((data)=>data.ac_type=="savings").forEach(data=> console.log(data.acno))
 accounts.filter((data)=>data.ac_type=="savings").forEach(data=> console.log(data.acno))
//console.log(ac);
///Q2 print balance of  acno=1000
var bal=accounts.find((data)=>data.acno==1000).balance
//console.log(bal);

//Q3 print all details of gpay//
var trans =accounts.map(data=>data.transactions).flat()
//console.log(trans);
//trans.filter(data=>data.method=="g-pay").forEach(data=>console.log(data))
// var ss=trans.filter(data=>data.method=="g-pay")
// console.log(ss);


// Q4 print the credit transaction of 1002//

//accounts.map(data=>data.transactions).flat().filter(tran=>tran.to==1002).forEach(val=>console.log(val))
//var k=accounts.map(data=>data.transactions).flat().filter(tran=>tran.to==1002)
//console.log(k);

// Q5 account with highest balance//

 var maxbal=accounts.sort((d1,d2)=>d2.balance-d1.balance)[0]
 console.log(maxbal);
///

///Q6 Print transcation history of 1002///
console.log("hello");
var his
his=(accounts.map(data=>data.transactions).flat().filter(val=>val.to==1002))
his.push(accounts.find(data=>data.acno==1002).transactions)
console.log(his);

var t=accounts.find(data=>data.acno==1002)
///console.log(t);
console.log("remain");

var debitTransaction=accounts.find(data=>data.acno==1002).transactions
//console.log(debitTransaction);

var credittranscation=accounts.map(data=>data.transactions).flat().filter(val=>val.to==1002)
//console.log(credittranscation);
//var history=credittranscation.concat(debitTransaction)
var  history={"debitTransaction":debitTransaction,"creditransaction":credittranscation}

console.log(history);

var hes
hes=(accounts.map(data=>data.transactions).flat().filter(val=>val.to==1002))
//his.push(accounts.find(data=>data.acno==1002).transactions)
console.log(his);

// var car=[
//     {varirents:["petrol","abs"]},
//     {colors:["red","yellow"]}
// ]
// car[0].varirents.push("manual")
// console.log(car[0].varirents);

// var bike={
//   2000:  {varirents:["petrol","abs"]},
//   2004:  {varirents:["petrol","abs"]}
// }
// bike[2000].varirents.push("milage")
// console.log(bike[2000].varirents);
var transactions=[
  {credit:[]},
  {debit:[]}
]
var cur={frmo:1000,amount:5000}
transactions[0].credit.push(cur)

// console.log(transactions[0].debit);
for(let i in transactions)
{
console.log(transactions[i]);
}
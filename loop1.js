// var num=1234
// var s="";
// let sum=0

// while(num!=0)
// {
//     let lastdigit=num%10;
//     //s+=lastdigit;
//     let n=lastdigit**3
//     sum+=n;
//     num= Math.floor(num/10)
// }
// console.log(sum);
// var table=
// {
// topdrawer:{
//            file:{
//                  redfile:"secretdocuments"
//                 },
//             books:"Malayalam"
//          },
//   bottomdrawer:"Soda"       
// }
// var val=table.topdrawer.file.redfile
// console.log(val)

// accounts = {
//     1000: {
//         accno: 1000, personName: "ram", balance: 5000, password: "userone",
//         transactions: {
//             creditTransactions: [],
//             debitTransactions: []
//         }

//     },
//     two: {
//         accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
//         transactions: {
//             creditTransactions: [],
//             debitTransactions: []
//         }
//     },
//     three: {
//         accno: 1002, personName: "raju", balance: 8000, password: "userthree",
//         transactions: {
//             creditTransactions: [],
//             debitTransactions: []
//         }
//     },
//     four: {
//         accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
//         transactions: {
//             creditTransactions: [],
//             debitTransactions: []
//         }
//     },
// }
// var val=accounts[1000].transactions
// console.log(val);

// var bighero=
//                {characters:
//                      [
//                          {name:"Moiro",voice:"RyanPotter"},
//                          {name:"baymax",voice:"shawnmendes"},
//                      ]
                    
//                }


//              //  console.log(bighero.characters[0]);
//              let char=bighero["characters"]
//              let len=char.length
//              console.log(len);
//              for(let i=0;i<len;i++)
//              {
//                  for(let data in char[i])
//                  {
//                      console.log(data,char[i][data]);
//                  }
//              }
           //  char.forEach(data=>console.log(data))
              


// arr=[[1,2],[3,4],[4,5]]
// for(let data in arr)
// {   
//     //console.log(data);
//   //  console.log(arr[data]);
//     for(let data1 of arr[data])
//     {
//     //   console.log(data1);
//     }

// }
// arr.forEach(element => {console.log(element);
// })
// arr.flat().forEach(element => {console.log(element);
// })
    
// for(let data of arr)
// { 
//    for(let data1 of data)
//    {
//        console.log(data1);
//    }
//data.forEach(element => {console.log(element)
//})  
//}  


var obj={student:[ {
    name1:"shefeek s",
    age:26,
    place:"ayoor"
       },
       {
        name1:"ramu",
        age:26,
        place:"ayoor"
        }
    ],
teachers:
[
{name:"rupesh"},
{name:"sajeev"}
]}
   let val=obj.student;
   console.log(val);
   let len=val.length
   console.log(len);
   for(let i=0;i<len;i++)
   {
       for(let data in val[i])
       {
       // console.log(data,val[i][data]);
       // console.log(val[i][data]);
       }
   }
   var bighero=
               {characters:
                     [
                         {name:"Moiro",voice:"RyanPotter"},
                         {name:"baymax",voice:"shawnmendes"},
                     ]
                    
               }
            

//              //  console.log(bighero.characters[0]);
//              let char=bighero["characters"]
//              console.log(char);
//              let len=char.length
//              console.log(len);
//              for(let i=0;i<len;i++)
//              {
//                  for(let data in char[i])
//                  {
//                      console.log(data);
//                      console.log(data,char[i][data]);
//                  }
//              }

var obj={
    name:"hai",
    place:"hello"
}
for(let data in obj)
{
    //console.log(data,obj[data]);
}
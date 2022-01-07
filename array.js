// num=[1,2]
// console.log(num[0]);

// obj={
//     "hai":10,
//     "bye":15
//     }

//     console.log(obj);

// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// for(let data of arr)
// {
//     console.log(data);
// }
var arr=[1000,2500,3000,5000,6000,3000,25000]
let total=0;
let max=0
// for(let data of arr)
// {
//     if(data>max)
//     {
//       max=data
//     }
    
//     total+=data
// }
// console.log("total amount is   =>",total);
// console.log("maximum amount is =>",max);
arr.push(30000)
console.log(arr);
let unique = [...new Set(arr)];
console.log(unique);
var st=new Set()
for(let data of arr)
{
  st.add(data)
}
console.log(st);
var un=[]
for(let data of arr)
{
  if(un.includes(data))
  {

  }
  else{
    un.push(data)
  }

}
console.log(un);

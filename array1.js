// var arr=[9,5,7,8,4,6,8]
// var op=[]
// for(let num of arr)
// {
//     num>5?op.push(num+1):op.push(num+5)
// }
// console.log(op);

// var arr=[2,3,4,5]
// sum=9;
// for(let i of arr)
// {
//   for(let j of arr)
//   {
//       if(i+j==sum)
//       {
//           console.log(`pairs =>(${i},${j})`);
         
//       }
//       break;

//   }
// }
var arr1=[10,11,20,21]
var arr2=[11,12,20,21]
p1=0
p2=0
count=0
while(p1<arr1.length && p2<arr2.length)
{
    if(arr1[p1]==arr2[p2])
    {console.log(`Common pairs found ${arr1[p1]}`);
    p1++
    p2++
    }
    else if(arr1[p1]<arr2[p2])
    {
        p1++
    }
    else if(arr1[p1]>arr2[p2])
    {
        p2++
    }

count++
}
console.log(count);

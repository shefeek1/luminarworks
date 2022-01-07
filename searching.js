//var arr1=[21,20,12,10]
var arr2=[11,12,20,21]
//arr1.sort((n1,n2)=>n1-n2)
//console.log(arr1);
var element=50;

var flag=0;
for(let i of arr2)
{
    if(element==i)
    {
        flag=1;
        break
    }
}
console.log(flag==0?"Not found":"found");
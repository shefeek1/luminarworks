var employees=[
    [1000,"aam",15000,"hr",1990,2005], 
    [1000,"tom",35000,"developer",1990,2005],
    [1000,"tom",32000,"developer",1990,2005],
    [1000,"nik",45000,"sales",1990,2005],
    [1000,"jack",40000,"ba",1990,2005],
]
// for(let employee of employees)
// {
//     console.log(employee[1]);
// }
//experince
// for(let employee of employees)
// {
//     let exp=employee[5]-employee[4];
//     if(exp>10)
//     console.log(employee);
// }
//second highest salary//
employees.sort((e1,e2)=>e2[2]-e1[2])
console.log(employees[1][2]);
///miminimum salary//
console.log(employees[employees.length-1][2]);
//total number if employee//
console.log(employees.length);
//highest salary of developer//
var dev=[]
for(let employee of employees)
{
    if(employee[3]=="developer")
    {
        dev.push(employee)
    }
}
console.log(dev);
dev.sort((d1,d2)=>d2[2]-d1[2])
console.log("Highest developer salary",dev[0][2]);
//name start with a or A//

for(let employee of employees)
{
   if(employee[1][0]=="A"||employee[1][0]=="a")
   {
       console.log(employee);
   }
}
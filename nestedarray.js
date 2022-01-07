var students=[
    [1000,"akhil","mern",155,"mca"],
    [1000,"rejin","mern",145,"mca"],
    [1000,"anu","django",145,"mca"],
    [1000,"nikhil","testing",115,"mca"],
    [1000,"anjana","djnago",175,"mca"],

]
//console.log(students[0][1]);
// for(let student of students)
// { 
//     if(student[3]>130 && student[2]=="django")
//     console.log(student);
// }
let max_total=0;
for(let student of students)
{ 
    if(student[3]>max_total)
    {
        max_total=student[3]
    }
}
console.log(max_total);
var max=students.reduce((s1,s2)=>s1[3]>s2[3]?s1[3]:s2[3])
console.log(max);
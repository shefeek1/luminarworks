//reduce//

// var  arr=[1,2,3,4,5,6,7,8]
// var sum=arr.reduce((n1,n2)=>n1+n2)
// console.log(sum);
// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

//sum//  to return boolean values//

var covid_data=[
[1,"trivandrum",40000,200,38000,8,5],
[2,"kollam",35000,250,33000,7,3],
[3,"kottayam",25000,150,24000,9,5],
[4,"alapuzha",70000,400,44000,11,4],
[5,"ernakulam",70000,500,65000,11,7],
[6,"wayanad",75000,550,55000,9,5]
]

//Q1 highest cases in district
var highestcase=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
//console.log(highestcase);

//Q2 district with highest 1 dose vaccination rate
var highvacc=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5]
//console.log(highvacc);

var greendist=covid_data.filter(d=>d[5]==highvacc)
//console.log(greendist);

//Q3 district with low death case

var lowdeath=covid_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)[1]
//console.log(lowdeath);

//Q4 sort district with positive cases
var sortdist=covid_data.sort((d1,d2)=>d1[2]-d2[2])
//console.log(sortdist);

//Q5 sort district based on first dose
var vaccsort= covid_data.sort((d1,d2)=>d1[5]-d2[5])
//console.log(vaccsort);

//Q6 Is there any district  with + positive case > 60000
//var isdist=covid_data.filter(d=>d[2]>60000)
var isdist=covid_data.filter(d=>d[2]>60000).map(d1=>d1[1])
//console.log(isdist);

//Q7 print wayanad details
var waynaddetails=covid_data.find(d1=>d1[1]=="wayanad")
console.log(waynaddetails);

//Q8 total +ve cases
var totalcases=covid_data.map(d=>d[2]).reduce((d1,d2)=>d1+d2)
//console.log(totalcases);

// Q9 total Cured cases

var totalcured=covid_data.map(d=>d[4]).reduce((d1,d2)=>d1+d2)
//console.log(totalcured);

//Q10 Cured number of idukky
var idukkycured=covid_data.find(d=>d[1]=="wayanad")[4]
console.log(idukkycured);

//Q11 total death cases//

var totaldeath=covid_data.map(d=>d[3]).reduce((d1,d2)=>d1+d2)
console.log(totaldeath);
//map()
//filter()
//reduce()

//console.log(typeof(arr));
//var square=arr.map(n=>n**2)
//console.log(square);


var names=["hgfjh","ffuygu"]
var upp=names.map(n=>n.toUpperCase())
//console.log(upp);
var mobiles=[
    [1000,"samsung","smasung f41",15000,"snapdragon","AMOLED","4G"],
    [1005,"samsung","smasung f51",18000,"snapdragon","AMOLED","4G"],
    [1001,"nokia","nokia f41",25000,"snapdragon","AMOLED","5G"],
    [1002,"oppo","oppo f41",35000,"snapdragon","AMOLED","5G"]
]
var mobname=mobiles.map(mob=>mob[1])
//console.log(mobname);

var mobprice=mobiles.map(mob=>mob[3])
//console.log(mobprice);

// var arr=[1,2,3,4,5]
// var even=arr.filter(n=>n%2==0)
// console.log(even);

var ppl=["asd","hgfhj","jhjhg"]
var aa=ppl.filter(n=>n[0]=="a")
//console.log(aa);
var mobn=mobiles.filter(mobile=>mobile[1]=="samsung")
//console.log(mobn);
var mobna=mobiles.filter(mobile=>mobile[1]=="samsung").map(mob=>mob[2])
//console.log(mobna);
var a=mobiles.map(data=>data[2])
//console.log(a);
var b=mobiles.find(data=>data[3]=="18000")
//console.log(b)

// Q - print mobile details below 25000//
var price=mobiles.filter(mob=>mob[3]<25000).map(data=>[data[2],data[3]])
console.log(price);

//Q - print mobile details price range 25000-40000

var mobpric=mobiles.filter(mob=>(mob[3]>25000 && mob[3]<41000)).map(data=>[data[2],data[3]])
//console.log(mobpric);

///Q list all 5G mobile names  

var fiveg=mobiles.filter(mob=>mob[6]=="5G").map(data=>data[2])
console.log(fiveg);
///Q list all 5G mobile names under 25000

var under=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<25000).map(data=>console.log(data[2]))
//console.log(under);

///Q list all samsung mobile names whose band 4g and display AMOLED Type 

var band=mobiles.filter(mob=>mob[6]=="4G" && mob[5]=="AMOLED").map(data=>console.log(data[2]))


//Q Highest Cost mobile///
var highest_sal=mobiles.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)[3]
console.log(highest_sal);
var highcost=mobiles.filter(mob=>mob[3]==highest_sal)
console.log(highcost);
//Q low cost mobile//
var lowcost=mobiles.reduce((n1,n2)=>n1[3]<n2[3]?n1:n2)[3]
console.log(lowcost);
var lowcostp=mobiles.filter(mob=>mob[3]==lowcost)
console.log(lowcostp);



//some//  to return boolean values//

var isavalmob=mobiles.some(mob=>mob[3]>18000 && mob[3]<35000) 
console.log(isavalmob);


//find()//

var isthere=mobiles.find(mob=>mob[1]=="samsung")
console.log(isthere);

//filter//
var isthere1=mobiles.filter(mob=>mob[1]=="samsung")
console.log(isthere1);
// var person={
//     name1:"ram",
//     age:25,

//     printperson(){
//           console.log(this.name1,this.age);
//     }
// }
//  //p=new person()

// person.job="developer";
// person.printperson();
// console.log(person);

// var baleno={
//     name:"baleno",
//     manofacterer:"nexa"

// }
// console.log(baleno.manofactere

var employee={
    eid:1000,
    salary:25000,
    desig:"developer",
    experience:2
}

if("experience" in employee)
{
    employee.experience+=1;
}
else{
    employee.experience=1
}

employee["Place"]="tvm"
//console.log(employee);

//word count///

 var text="hello hai hello hai" 
wc={}
text.split(" ").map(data=>data in wc?wc[data]+=1:wc[data]=1)
//console.log(wc);

// var words=text.split(" ")
// console.log(words);
// var ob={}
// for(let word of words)
// {
//    if(word in ob)
//    {
//     ob[word]+=1
//     ob["place"]+=5
//     console.log(ob);
//    }
//    else
//    {
//        ob[word]=1
//        console.log(ob);
//    }
// }

// console.log(ob);

//ABCAAD recursive chracter

// let text="ABCAAD"
// op={}
// for(let char of text)
// {
//     if(char in op )
//     {
//      op[char]+=1
//      break;
//     }
//     else
//     {
//        op[char]=1
//     }
// }
// console.log(op);
// op1=[]
// for(let char of text1)
// {
//     if(op1.includes(char))
//     {
//         console.log("recursive character",char);
//         break;
//     }
//     else{
//         op1.push(char)
//       //  console.log(op1);
//     }
// }

//var text2="ABCAAD"
op2={}
// for(let char of text2)
// {
//     if(char in op2)
//     {
//         op2[char]+=1
//         console.log("Recursive chracter",char);
//         break
//     }
//     else{
//         op2[char]=1
//     }
// }
var text2="ABCAAD"
var wc1={}
var opp=[]
//text2.split("").map(data=>data in wc1?opp.push(data):wc1[data]=1)
Array.from(text2).map(data=>data in wc1?opp.push(data):wc1[data]=1)
console.log(opp[0]);
console.log(opp);


// 0

//console.log(employee.ename);
//employee.exp="5 years"
// console.log(employee);
// employee.getname();
// console.log("gender" in employee);
// if("exp" in employee){
//     employee.exp+=1
// }
// else{
//     employee.exp=1;
// }
// console.log(employee);

//word count//
var text="hello hai hello hai"
var WC={};
var words=text.split(" ").map(word=>word in WC?WC[word]+=1:WC[word]=1) 
console.log(words); 


// for(let word of words)
// {
//     if(word in WC)
//     {
//       WC[word]+=1;
   
//     }
//     else
//     {
//       WC[word]=1;
    
//     }
// }

 console.log(WC);

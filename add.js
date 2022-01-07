
// function add(...arg)
// {
//     return arg.reduce((n1,n2)=>n1+n2)
// }
let add=(...arg)=>arg.reduce((n1,n2)=>(n1+n2))

console.log(add(10,20,30,40,10));

// function findmax(...arg){
// return arg.reduce((n1,n2)=>(n1>n2)?n1:n2)
// }
let findmax=(...arg)=>arg.reduce((n1,n2)=>(n1>n2)?n1:n2)
console.log(findmax(10,20,30,40,10))


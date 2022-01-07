var ar=[
    [1,2],
    [3,4],
    [5,6],
    [7,8]
]

// var sum =ar.reduce((v1,v2)=>v1[0]+v2[0])
var sum =ar.reduce((v1,v2)=>v1[0]>v2[0]?v1[0]:v2[0])
console.log(sum);
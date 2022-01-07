var pattern="ABCC"
var op=[]

for(let char of pattern)
{
    if(op.includes(char))
    {
        console.log("Recursive chracter",char);
    }
    else
    op.push(char)
}
console.log(op);
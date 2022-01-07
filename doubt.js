var text="hello hai hello hai " 

var words=text.split(" ")
console.log(words);
var ob={}
for(let word of words)
{
   if(word in ob)
   {
    ob[word]+=1
    ob["place"]=5
   }
   else
   {
       ob[word]=1
   }
}

console.log(ob);
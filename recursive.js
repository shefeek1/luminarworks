var pattern="ABAAC"
var wc={}

for(let char of pattern){
    if(char in wc)
    {
         console.log("First",char);
      break;
   // wc[char]+=1;
    }
    else
    {
        wc[char]=1;

    }
}
console.log(wc);
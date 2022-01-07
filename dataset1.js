var dataset=
[
    {district:"palakad",temp:31},
    {district:"tvm",temp:30},
    {district:"palakad",temp:30},
    {district:"kollam",temp:32},
]
var weather={}
weather.climate="moderate"
// for(let data of dataset)
// { 
//     // data.rain=11;
//     // console.log(data);
// }

for(let data of dataset)
{
    temperature=data.temp,
    districtname=data.district
    if( districtname in weather)
    {
       let oldtemp=weather[districtname]
       if(oldtemp<data.temp)
       {
          weather[districtname]=data.temp;
       }
    //    else
    //    {
    //        weather[districtname]=temperature;
    //    }
    }
    else{
        weather[districtname]=temperature
    }
}
console.log(weather);
// var baleno={
//     colors:["red","white"],
//     varients:["petrol","diesel"],
//     price:"9lac",
//      manufacterer:"nexa",
//     getprice(){
//         return this.price;
//     }
// }
// var glanza={
//     price:"10lac",
//     manufacterer:"toyota"
// }
// glanza.__proto__=baleno;
// console.log(glanza.varients);
// console.log(glanza.colors);
// console.log(baleno.getprice());
// console.log(glanza.getprice());

class student{
    
    // constructor(roll,name,mark)
    // {
    //     this.roll=roll;
    //     this.mark=mark;
    //     this.name=name;
    // }
    constructor(...arg)
    {
        this.roll=arg[0];
        this.mark=arg[1]
        this.name=arg[2]
    }
    printperson(){
        console.log(this.name,this.roll,this.mark);
    }
}
var st1=new student(5,"shefeek",87)
//st1.setperson()
st1.printperson();
var st2= new student(7,"Nick",91)
//st2.setperson(7,"Nick",91)
st2.printperson();

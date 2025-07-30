// let firstName="Rexha"
// let lastName ="Bebe";
// for( let i=0;i<=5;i--){
//     console.log(i);    
// }
//const, var, let
const pi = 3.14159;
var radius = 5;
radius = 7;
let area = pi * radius * radius;

console.log("Area of circle:", area.toFixed(2));
//String
let name1 = "krishna";
console.log(name1);
let name2 = 'krishna';
console.log(name2);

//accesing string by index
console.log(name2[3]);

//printing
let firstName="Krishna";
let lastName = "Yadav";
console.log("Name : "+ firstName +" "+ lastName+"\n"+"Email : "+firstName+lastName+"@gmail.com");

//string literals multiline printing is allowed
console.log(`Name : ${firstName} ${lastName}
Email : ${firstName}_${lastName}@gmail.com`)

//boolean
let x=10n;
let y=12n;
console.log(x/y);

//undefined
let custName="Krishna";
custName=undefined;
console.log(custName);


//null
let item="watch";
item=null;
item=10;
console.log(item);

//symbol : it is like unique id generation
let emp1 = Symbol("empno");
let emp2 = Symbol("empno");
console.log(emp1==emp2);
console.log(emp1.toString()); //toString for alert
console.log(emp1.description);

//Symbol.for// its like public static final // global access same addree and value
let emp10 = Symbol.for("empno");
let emp20 = Symbol.for("empno");
console.log(emp10==emp20);
console.log(emp10.toString()); //toString for alert
console.log(emp10.description);


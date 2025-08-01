// //30/july
// // // // // let firstName="Rexha"
// // // // // let lastName ="Bebe";
// // // // // for( let i=0;i<=5;i--){
// // // // //     console.log(i);    
// // // // // }
// // // // //const, var, let
// // // // const pi = 3.14159;
// // // // var radius = 5;
// // // // radius = 7;
// // // // let area = pi * radius * radius;

// // // // console.log("Area of circle:", area.toFixed(2));
// // // // //String
// // // // let name1 = "krishna";
// // // // console.log(name1);
// // // // let name2 = 'krishna';
// // // // console.log(name2);

// // // // //accesing string by index
// // // // console.log(name2[3]);

// // // // //printing
// // // // let firstName="Krishna";
// // // // let lastName = "Yadav";
// // // // console.log("Name : "+ firstName +" "+ lastName+"\n"+"Email : "+firstName+lastName+"@gmail.com");

// // // // //string literals multiline printing is allowed `mayur: ${name}`
// // // // console.log(`Name : ${firstName} ${lastName}
// // // // Email : ${firstName}_${lastName}@gmail.com`)

// // // // //boolean
// // // // let x=10n;
// // // // let y=12n;
// // // // console.log(x/y);

// // // // //undefined
// // // // let custName="Krishna";
// // // // custName=undefined;
// // // // console.log(custName);


// // // // //null
// // // // let item="watch";
// // // // item=null;
// // // // item=10;
// // // // console.log(item);

// // // // //symbol : it is like unique id generation
// // // // let emp1 = Symbol("empno"); //uuid 68648jksfsgf
// // // // let emp2 = Symbol("empno");//uuid 782364824jkjsdhfji
// // // // console.log(emp1==emp2);
// // // // console.log(emp1.toString()); //toString for alert
// // // // console.log(emp1.description);

// // // // //Symbol.for// its like public static final // global access same addree and value
// // // // let emp10 = Symbol.for("empno");
// // // // let emp20 = Symbol.for("empno");
// // // // console.log(emp10==emp20);
// // // // console.log(emp10.toString()); //toString for alert
// // // // console.log(emp10.description);


// //31july
// // // // let xx=12;
// // // // let yy="mayur";
// // // // console.log(xx+yy);



// // // // var nameT= "Mayur"
// // // // console.log(nameT);
// // // // console.log(nameT);
// // // // console.log(nameT);
// // // // console.log(nameT);
// // // // var nameT="krishna";
// // // // console.log(nameT);
// // // // console.log(nameT);
// // // // console.log(nameT);

// // // // var nameT="krishna";
// // // // console.log(nameT);

// // // // let str ="Krishna";//String str = "krishna"
// // // // str=10;
// // // // console.log(str);


// // let myData={
// //     name:"krishna",
// //     surname:"yadav",
// //     age:24,
// //     occupation:"eunemployee"
// // };

// // console.log(myData.name);

// // //let int aarr[] = new int[8]; in java
// // let intArr1= new Array();
// // let intArr = [1,2,"Three",4,5];
// // intArr[0]=10;
// // console.log(intArr);

// // let arr = [];
// // console.log(arr);

// // let mayur={
// //     name:"takawale"
// // };

// // console.log(mayur);

// // let x= "mayur", 
// // y="krishna",
// // z= "Sanket",
// // q= "Aakash";

// // int x, y

// //operators

// let add = (5+4);
// console.log(add);

// let sub = (5-4);
// console.log(sub);

// let mult=(5*4);
// console.log(mult);

// let div=(5/2);
// console.log(div);

// let mod=(5%2);
// console.log(mod);

// let value1 = 5;
// console.log(++value1);

// let value2 = 5;
// console.log(--value2);

// //typeOf

// let name = 1;
// console.log(typeof name);


// //break

// for(let i=0; i<10; i++){
//     console.log(i);
//     if(i==4) break;
// }

// //if else
// let workingHr = 20;
// let Hr;
// (workingHr>10.5) ? Hr="you have done extra work" : Hr="you work less";
// console.log(Hr);

// let age=2;
// let canVote=(age>=18)?"Yess.":"No";
// console.log(canVote);

// let number = 24;
// if(number/3){
//     console.log("can devide");
// }

// //switch case

// let percentage=5;

// switch(percentage){
//     case 5 : console.log("1st class");
//                         break;
//     case 4 : console.log("2nd class");
//                         break;
//     case 3: console.log("3rd class");
//                         break;
//     case 2: console.log("poor");
//                         break;
//     default : console.log("fail");
// }

//loops
//for loop
console.log("In for loop");

let count = 0;
for(let i = 0; i<5; i++){
    count++;
    console.log(count);
}

//while loop
console.log("In while Loop");

let count1 = 0;

while(count1<10){
    count1++;
    console.log(count1);
}

//do while
let x=0;

do{
    console.log("do dtatement "+x);
    x++;
}while(x<10);

//normal function

function sayHello1(){
    return "Hii saying hellow..";
}

console.log(sayHello1());

//let convert to arrow function

var sayHello = () =>{
    return console.log("Saying hellow from arrow function.");
}

sayHello();

var sayHello = () => console.log("if only single statement {} not required.");

sayHello();

//() are required if there is not any argument or if we are passing more than 1 argument.

var sayHello = x => console.log("hii () not required if there is only one augument " + x);

sayHello("Krishna");

//parameterised function

var sayHello = (x, y) =>x*y;
console.log(sayHello(2,3));

let value = function(num1, num2){
    return num1*num2;
}

console.log(value(1,2));






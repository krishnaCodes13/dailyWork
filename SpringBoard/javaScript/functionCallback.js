//call back is  nothing but the passing one function as argument to the another function

function formate(name){
    console.log("My name is " + name);
}


function print(callback){
    let name = "krishna";
    callback(name);//calling formate function
}

print(formate);// here we are passing formate() to print()

setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
// refreence type -> Object, arrays and function

// Object:
let friend = {
    name: "amol",
    age: 25,
    smoking: true
}
console.log(friend);
console.log(friend.smoking);
console.log(typeof (friend));
console.log(friend['smoking']);

//Arrays:

let arr = ["vaibhav", 24, "BCS", false, 73.59]
console.log(arr);
console.log(typeof (arr));
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

//----- Functions 

function fri(name) {
    console.log("My friend name is: " + name);
}
fri("Ganesh");
fri("Harsh");
fri(1);

// Type of funcations

// Funcation decleartion 
function fun(a, b) {
    return a - b;
}
console.log("substraction f=of give number is: " + fun(9, 2));

// Funcation Expresion

let add = function (a, b, c) {
    return a + b + c;
}
console.log("Addation fo give three numbers is: " + add(1, 2, 3))

// arrow funcation

const mul = (a, b) => a * b;
console.log(mul(2, 2));


//Higher order function

// A common funcation is returning or passing function as an arguments that is called as hiher order function.

function Hi(fun, a,b){
return (fun,a,b);
}
Hi(mul,2,3);
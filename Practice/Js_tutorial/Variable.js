// Premetive type
// Number, String, Boolean, undefined, null, symbole
// Dynamic programing 

let a =12;
console.log(a);
console.log(typeof(a));

let b="Vaibhav";
console.log(b);
console.log(typeof(b));

let c=true;
console.log(c);
console.log(typeof(c));

let d
console.log(d);
console.log(typeof(d));

let e=null;
console.log(e);
console.log(typeof(e));

e="bhinge"; // JS the dynamic programing language tha tmeans we can chagnge the type of the alriablewith its value 
console.log(typeof(e));


// Refrences type 
 let info={
    name:"Vaibhav",
    lname:"Bhinge",
    age:24,
 }
  console.log(info);
  console.log(typeof(info));

  console.log(info.lname);  // this is dot notation -its easy to write and faster 
  console.log(info['name']);  //this is [] Bracket notation- it help to find with spaces and nubers


//   difference between refrence type and premetive type 

// example of premetive/value type:
let x=12;
let y=x;
x=13;
console.log(x);  //it will change the value of x to 13 
console.log(y); // it will print 12 because it copies value of the x 
 
// Example fo the Refrences type

let r={
    friend:"Ganesh"
};
let s=r;
r.friend="Harsh";
console.log(r); // here it willprnt r as it's as premetive/value type 
console.log(s); // but here in s it will also print r because in refrence type it not copy its value its coping its refrence of r


// Synchronous 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);


// Asynchronous
// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log(3);
    
// }, 10000);
// console.log(4);


// Promise : is an objest that represnt the value of fulfield or rejected asynchronous operation and its results.

let promiseObject = new Promise(function(resolve, reject){
const age=18;
if(age>=18){
    setTimeout(()=>{
resolve("he can vote"), 500*10;        
    })
}
else{
    reject("he cant vote!")
}
});

console.log(promiseObject);

 promiseObject.then((result)=>{
    console.log("he is over 18 so he can vote");
    
 }).catch((reject)=>{
    console.log("HE is not 18 or he is less than 18 so he cant vote!");
    
 })

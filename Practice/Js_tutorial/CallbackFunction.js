// Callback funcation
 // callbcak is a funcation where a funcation is passed as an argumnet in another funcation to exacute it latter 

first("Vaibahv", second);

function second() {
    console.log("Good By!");
    
}
function first(name,Callback) {
    console.log("Hi,"+name);
    Callback();
}

// here in this given code we are having two funcations but as
//  we calling fucantion firest and passing him a second fucantion
//  as we calling ficnation first and then calling fucnation second.
//  we can say this is the perfect examole of the callback fucnation

 
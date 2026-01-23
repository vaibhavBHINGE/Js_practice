// Function to display the result
function myDisplay(message) {
  console.log(message);
}

// Create a Promise Object
let myPromise = new Promise(function(myResolve, myReject) {
  let result = true; // Simulating a successful operation

  // Code that may take some time (e.g., fetching data) goes here

  if (result == true) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

// Using then() to handle both success and failure
myPromise.then(
  value => myDisplay(value), // Runs if result is true
  error => myDisplay(error)  // Runs if result is false
);

// Closure in jS

// A funcation that remembers And accessable to variable form outer scop even if its exucation is done

function add() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const result = add();

// Adding () calls the function and returns the updated count
console.log(result()); // Output: 1
console.log(result()); // Output: 2
console.log(result()); // Output: 3
console.log(result()); // Output: 4

console.log(count) //Remov because it's private and will cause an error!


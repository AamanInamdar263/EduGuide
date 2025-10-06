// secondLargest

// Sample array
const arr = [12, 45, 67, 23, 67];

// Initialize largest and second largest
let first = Number.MIN_SAFE_INTEGER;
let second = Number.MIN_SAFE_INTEGER;

// Loop through array to find first and second largest
for (let num of arr) {
    if (num > first) {
        second = first;
        first = num;
    } else if (num > second && num !== first) {
        second = num;
    }
}

// Output result
if (second === Number.MIN_SAFE_INTEGER) {
    console.log("There is no second largest element.");
} else {
    console.log("Second largest number is:", second);
}

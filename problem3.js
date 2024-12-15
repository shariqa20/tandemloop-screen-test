// JavaScript solution to generate the series
function generateCustomSeries(a) {
    // Initialize an empty string to store the result
    let result = "";

    // Determine the number of terms based on the input
    // Odd numbers are generated until a is odd, else use a - 1
    let terms = a % 2 === 0 ? a - 1 : a;

    // Loop to calculate the series up to 'terms'
    for (let i = 0; i < terms; i++) {
        // Calculate the i-th odd number
        let oddNumber = 1 + 2 * i;

        // Append the number to the result string
        result += oddNumber;

        // Add a comma and space after each number except the last one
        if (i < terms - 1) {
            result += ", ";
        }
    }

    // Return the final result string
    return result;
}

// Example usage:
// Input: number of terms 'a'
let a = 6; // You can change this value to test with other inputs
console.log(generateCustomSeries(a)); // Output: 1, 3, 5, 7, 9

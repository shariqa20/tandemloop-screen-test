// JavaScript solution to generate the series
function generateSeries(a) {
    // Initialize an empty string to store the result
    let result = "";

    // Loop to calculate 'a' odd numbers
    for (let i = 0; i < a; i++) {
        // Calculate the i-th odd number
        let oddNumber = 1 + 2 * i;

        // Append the number to the result string
        result += oddNumber;

        // Add a comma and space after each number except the last one
        if (i < a - 1) {
            result += ", ";
        }
    }

    // Return the final result string
    return result;
}

// Example usage:
// Input: number of terms 'a'
let a = 4; // You can change this value to test with other inputs
console.log(generateSeries(a)); // Output: 1, 3, 5, 7

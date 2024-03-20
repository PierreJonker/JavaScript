// Initialize an empty array called myTable to store the multiplication table.
const myTable = [];

// Define the size of the multiplication table (5x5 in this case).
const numm = 5;

// Outer loop iterating over the rows of the table.
for (x = 0; x < numm; x++) {
    // Initialize an empty array called temp to store the values of the current row.
    const temp = [];

    // Inner loop iterating over the columns of the table.
    for (let y = 0; y < numm; y++) {
        // Calculate the product of the current row (x) and the current column (y) and push it into the temp array.
        temp.push(x * y);
    }

    // Add the temp array (representing the current row) to the myTable array.
    myTable.push(temp);
}

// Display the myTable array as a table in the console.
console.table(myTable);

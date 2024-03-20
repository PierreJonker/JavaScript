// Initialize an empty array to store the grid data
const grid = [];

// Define the total number of cells in the grid
const cells = 64;

// Initialize a counter variable to keep track of the cell values
let counter = 0;

// Initialize a variable to represent a row in the grid
let row;

// Iterate through each cell
for (let x = 0; x < cells + 1; x++) {
    // Check if the counter is divisible evenly by 8 (indicating the start of a new row)
    if (counter % 8 == 0) {
        // If it is, push the previous row data into the grid array, if it exists
        if (row != undefined) {        
            grid.push(row);
        }
        // Initialize a new row array
        row = [];
    }
    // Increment the counter to generate unique cell values
    counter++;
    // Store the current counter value in a temporary variable
    let temp = counter;
    // Push the current counter value into the current row array
    row.push(temp);
}

// Output the grid data in a formatted manner using console.table()
console.table(grid);

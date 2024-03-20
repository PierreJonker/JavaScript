// Initialize an empty array named 'inventory' to store items
const inventory = [];

// Define three items with their respective properties
const item3 = {
    name: "computer",
    model: "imac",
    cost: 1000,
    qty: 3
}

const item2 = {
    name: "phone",
    model: "android",
    cost: 500,
    qty: 11
}

const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 650,
    qty: 1
}

// Add the defined items to the 'inventory' array
inventory.push(item1, item2, item3);

// Output the 'inventory' array to the console
console.log(inventory);

// Output the quantity of the third item in the 'inventory' array to the console
console.log(inventory[2].qty);

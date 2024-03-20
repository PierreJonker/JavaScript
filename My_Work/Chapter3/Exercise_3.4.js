// Define an object representing a car with various properties such as make, model, number of tires, number of doors, color, and whether it's for sale.
const myCar = {
    make: "Toyota",
    model: "Camry",
    tires: 4,
    doors: 4,
    color: "blue",
    forSale: false
};

// Define a variable 'propColor' and assign it the value "color".
let propColor = "color";

// Update the property of 'myCar' corresponding to the value of 'propColor' (which is "color") to "red".
myCar[propColor] = "red";

// Change the value of 'propColor' to "forSale".
propColor = "forSale";

// Update the property of 'myCar' corresponding to the value of 'propColor' (which is now "forSale") to true.
myCar[propColor] = true;

// Print out the make and model of the car and whether it is for sale.
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);

// This code calculates Body Mass Index (BMI) based on the given height in inches and weight in pounds.
// It first converts the weight from pounds to kilograms and the height from inches to centimeters, as BMI calculations require weight in kilograms and height in meters.
// Then it calculates BMI using the formula: weight (in kilograms) divided by the square of height (in meters).
// Finally, it outputs the calculated weight, height, and BMI.
let inches = 72; // Height in inches
let pounds = 180; // Weight in pounds
let weight = pounds / 2.2046; // Convert weight from pounds to kilograms
let height = inches * 2.54; // Convert height from inches to centimeters
console.log(weight, height); // Output the converted weight and height
let bmi = weight / (height / 100 * height / 100); // Calculate BMI using the formula
console.log(bmi); // Output the calculated BMI

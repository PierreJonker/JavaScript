// Initialize an empty array to store work-related data
const myWork = [];

// Iterate through numbers from 1 to 9
for (let x = 1; x < 10; x++) {
    // Determine the status based on whether the current number is odd or even
    let stat = x % 2 ? true : false;

    // Create an object representing a lesson with its name and status
    let temp = {
        name: `Lesson ${x}`, // Set the name of the lesson
        status: stat // Set the status of the lesson
    };

    // Add the lesson object to the 'myWork' array
    myWork.push(temp);
}

// Output the array containing lesson data
console.log(myWork);

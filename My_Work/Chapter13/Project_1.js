// Array of allowed passwords
const allowed = ["1234", "pass", "apple"];

// Function to check if a password is allowed
function passwordChecker(pass) {
    return allowed.includes(pass);
}

// Function to simulate a login process with a given password
function login(password) {
    // Returning a Promise for asynchronous operation
    return new Promise((resolve, reject) => {
        // Checking if the password is allowed
        if (passwordChecker(password)) {
            // Resolving the promise if password is allowed
            resolve({
                status: true // Providing status as true
            });
        } else {
            // Rejecting the promise if password is not allowed
            reject({
                status: false // Providing status as false
            });
        }
    });
}

// Function to initiate login and handle promise resolution/rejection
function checker(pass) {
    // Initiating login process
    login(pass)
        // Handling successful login (resolved promise)
        .then(token => {
            console.log("Approve:"); // Logging approval message
            console.log(token); // Logging token
        })
        // Handling unsuccessful login (rejected promise)
        .catch(value => {
            console.log("Reject:"); // Logging rejection message
            console.log(value); // Logging rejection value
        });
}

// Testing the checker function with allowed and disallowed passwords
checker("1234"); // Testing with an allowed password
checker("wrong"); // Testing with a disallowed password

// Define two variables storing secret messages, one already URI encoded and another not encoded
const secretMes1 = "How's%20it%20going%3F";    
const secretMes2 = "How's it going?";

// Decode the URI encoded message to retrieve the original message
const decodedComp = decodeURIComponent(secretMes1);
console.log(decodedComp); // Output the decoded message to the console

// Encode the message to make it a URI component
const encodedComp = encodeURIComponent(secretMes2);
console.log(encodedComp); // Output the encoded message to the console

// Define a URI containing a query parameter with spaces
const uri = "http://www.basescripts.com?=Hello World";

// Encode the URI to ensure correct formatting for web use
const encoded = encodeURI(uri);
console.log(encoded); // Output the encoded URI to the console
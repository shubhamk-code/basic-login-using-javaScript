/** @format */

var database = [
  {
    username: "shubham",
    password: "pass123",
  },
    {
    username: "aryan",
    password: "pass101",
  },
  {
    username: "akshada",
    password: "pass102",
  },
  {
    username: "shruti",
    password: "pass104",
  },
];

var content = [
  {
    username: "Aryan",
    post: "JavaScript is fun",
  },
  {
    username: "Akshada",
    post: "I am learning react",
  },
  {
    username: "Shruti",
    post: "angular or react?",
  },
];

var usernamePrompt = prompt("Enter username: ");
var passwordPrompt = prompt("Enter password: ");

function signIn(username, password) {
  if (username === database[0].username && password === database[0].password) {
    console.log(content);
  } else {
    alert("Please enter correct username and password!");
  }
}

signIn(usernamePrompt, passwordPrompt);
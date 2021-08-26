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

function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(content);
  } else {
    alert("Please enter correct username and password!");
  }
}

var usernamePrompt = prompt("Enter username: ");
var passwordPrompt = prompt("Enter password: ");

signIn(usernamePrompt, passwordPrompt);




// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var generateBtn = document.querySelector("#generate");



// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {
   return arr[Math.floor(Math.random()*arr.length)];

}

// Function to generate password with user input
function generatePassword() {
  numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please enter a valid number.");
}
else {
  alert("Your password will be " + numberOfCharacters + " characters long.");

}

<<<<<<< HEAD
yesLowercase = confirm("Do you want lowercase characters?");
if (yesLowercase) {
  var turnToLowercase = alert("Your password will have lowercase characters.");
}
else {
  alert("Your password will NOT have lowercase characters.");
}
=======
  yesLowercase = confirm("Do you want lowercase characters?");
  if (yesLowercase) {


    var turnToLowercase = alert("Your password will have lowercase characters.");

  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }
>>>>>>> 67130a99f0520780be5a48cec6a1d66cc1665123


yesUppercase = confirm("Do you want uppercase characters?");
if (yesUppercase) {
  alert("Your password will have uppercase characters.");
}
else {
  alert("Your password will NOT have uppercase characters.");
}



isNumbers = confirm("Do you want to use numbers?");
if (isNumbers) {
  alert("Your password will have numbers.");

}
else {
  alert("Your password will NOT have numbers.");
}

hasSpecial = confirm("Do you want special characters?");
if (hasSpecial) {
  alert("Your password will have special characters.");
}
else {
  alert("Your password will NOT have special characters.");
}

let characters = [];

if (yesLowercase) {
  characters = characters.concat(lowerCasedCharacters);
}

if (yesUppercase) {
  characters = characters.concat(upperCasedCharacters);
}
if (isNumbers) {
  characters = characters.concat(numericCharacters);
}

if (hasSpecial) {
  characters = characters.concat(specialCharacters);
}

console.log(characters);

var Password = "";
for (i = 0; i < numberOfCharacters; i++) {
  Password += getRandom(characters);
  
};



console.log(Password);

return Password;

}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

/*

numberOfCharacters = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
if (numberOfCharacters < 8 || numberOfCharacters > 128) {
} else if (isNaN(numberOfCharacters)) {
  numberOfCharacters = prompt("Please enter a valid number.");
}
else {
  alert("Your password will be " + numberOfCharacters + " characters long.");

}

yesLowercase = confirm("Do you want lowercase characters?");
if (yesLowercase) {
  var turnToLowercase = alert("Your password will have lowercase characters.");
}
else {
  alert("Your password will NOT have lowercase characters.");
}


yesUppercase = confirm("Do you want uppercase characters?");
if (yesUppercase) {
  alert("Your password will have uppercase characters.");
}
else {
  alert("Your password will NOT have uppercase characters.");
}



isNumbers = confirm("Do you want to use numbers?");
if (isNumbers) {
  alert("Your password will have numbers.");

}
else {
  alert("Your password will NOT have numbers.");
}

hasSpecial = confirm("Do you want special characters?");
if (hasSpecial) {
  alert("Your password will have special characters.");
}
else {
  alert("Your password will NOT have special characters.");
}

let characters = [];

if (yesLowercase) {
  characters.push(lowerCasedCharacters);
}

if (yesUppercase) {
  characters.push(upperCasedCharacters);
}
if (isNumbers) {
  characters.push(numericCharacters);
}

if (hasSpecial) {
  characters.push(specialCharacters);
}

console.log(characters);

var Password = "";
for (i = 0; i < numberOfCharacters; i++) {
  Password = getRandom(characters) + characters;
  
};



console.log(password);

*/
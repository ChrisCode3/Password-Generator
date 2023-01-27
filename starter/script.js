

function generatePassword() {
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCasedCharacters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];




  var generateBtn = document.querySelector("#generate");



  // Function to prompt user for password options
  function getPasswordOptions() {

  }

  // Function for getting a random element from an array
  function getRandom(arr) {

  }

  // Function to generate password with user input
  function generatePassword() {

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



  // pick random cards out of new pool for length of password
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng = [Math.floor(Math.random() * possibleCharacters.length)];
    // or finalPassword += possibleCharacters[rng];
    finalPassword = finalPassword + possibleCharacters[rng];
  }
  return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


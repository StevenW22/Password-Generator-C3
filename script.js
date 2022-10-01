// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("How many characters do you want your passord to be?")
  
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("🚨🚔BUSTED! Please use real numbers.")
    return
  }


  if (passwordLength < 8 || passwordLength > 128) {
  window.alert("🛑 Password length must be between 8 & 128 characters")
  return
}

var userWantsNumbers = window.confirm("Would you like numbers in your password?😎")
var userWantsLowercase = window.confirm("Would you like lowercase letters in your password?😎")
var userWantsUppercase = window.confirm("Would you like uppercase letters in your password?😎")
var userWantsSpecialCharacters = window.confirm("Would you like special characters in your password?😎")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener
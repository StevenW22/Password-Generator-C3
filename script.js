// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
  max = min
  min = 0
}

var rand = Math.random()
return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}


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
  var userWantsSpec = window.confirm("Would you like special characters in your password?😎")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var specList = ["!", "@", "#", "$", "%", "^", "&", "*"] 
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var optionsCart =[]

  if (userWantsNumbers === true) {
  optionsCart.push(numberList)
  }

  if (userWantsLowercase === true) {
  optionsCart.push(lowercaseList)
  }

  if (userWantsUppercase === true) {
  optionsCart.push(upercaseList)
  }

  if  (userWantsSpec) {
  optionsCart.push(specList)
  }

  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList)
  }

 

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
  }

  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

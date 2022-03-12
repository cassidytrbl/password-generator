// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var number = [0,1,2,3,4,5,6,7,8,9];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","e","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacter =["!","@","#","$","%","^","&","*","_","+","~","<",">","?","/"];
var useLength;
let randomPassword =[];
var userchoice = [];

function generatePassword (){
var useLength = parseInt (prompt ("How many characters would you like?"))
console.log (typeof useLength)
if (useLength <8 || useLength > 128){
  alert ("Use a passphrase between 8 - 128 Characters.")
  return null
}
var useNumber = confirm ("Would you like to include numbers?");
var useUppercase = confirm ("Would you like to include uppercase?");
var useLowercase = confirm ("Would you like to include lowercase?");
var usespCharacter = confirm ("Would you like to include special characters?");

console.log (userchoice);

if (useNumber ==true){
  userchoice=userchoice.concat (number);
}
console.log (userchoice);
if (useUppercase ==true){
  userchoice=userchoice.concat(uppercase);
}
console.log (userchoice);
if (useLowercase ==true){
  userchoice=userchoice.concat(lowercase);
}
console.log (userchoice);
if (usespCharacter ==true){
  userchoice=userchoice.concat(specialCharacter);
}

var randomPasswordGenerated = [];

for (var i = 0; i < useLength; i++) {
var randomNumberPicked = Math.floor(Math.random() * (userchoice.length + 1));

randomPasswordGenerated= randomPasswordGenerated + userchoice[randomNumberPicked]

}
return randomPasswordGenerated;
}
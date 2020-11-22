// Assignment Code
var generateBtn = document.querySelector("#generate");

// Necessary arrays

var lowstring = "abcdefghijklmnopqrstuvwxyz"
var lowarray = lowstring.split("");
var uparray = lowstring.toUpperCase().split("");
var numstring = '0123456789'
var numarray = numstring.split("");
var spstring = "!@#$%^&*()-_?"
var sparray = spstring.split("");


//Function for password length and usable characters
function strength() {
  var passlength = parseInt(prompt("How many characters would you like in your password?"));
  if(passlength < 8 || passlength > 128 || isNaN(passlength) === true) {
    alert("please choose a number between 8-128");
    return;
  }

var uselow = confirm("Would you like to include lowercase letters?");
var useupper = confirm("Would you like to include uppercase letters?");
var usenum = confirm("Would you like to include numbers?");
var usespec = confirm("Would you like to include special characters?");

var options = {
  passlength,
  uselow,
  useupper,
  usenum,
  usespec
}
console.log(options)
return options
}


function generatePassword() {
var passoptions = strength();
var superArray = [];
var results = [];

if(passoptions.uselow === true) {
superArray = superArray.concat(lowarray)
console.log(superArray)
}
if(passoptions.useupper === true) {
superArray = superArray.concat(uparray)
console.log(superArray)
}
if(passoptions.usenum === true) {
superArray = superArray.concat(numarray)
console.log(superArray)
}
if(passoptions.usespec === true) {
superArray = superArray.concat(sparray)
console.log(superArray)
}

for(var i = 0; i < passoptions.passlength; i++) {
var index = Math.floor(Math.random() * superArray.length);
console.log(index)
var digit = superArray[index];
console.log(digit)
results.push(digit)
}
console.log(results)
return results.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
// Converting the required carracters into elements in different arrays for later use
var arrLowerCase = Array.from(lowerCase);
var arrUpperCase = Array.from(upperCase);
var arrNumbers = Array.from(numbers);
var arrSpecialChar = Array.from(specialChar);
// Code to generate random password
function generatePassword() {
  // Gathering user inputs for required password criteria
  var pwLength = prompt(
    "Enter desired password length. Must be greater than or equal to 8 but less than or equal to 128?"
  );
  if (pwLength >= 8 && pwLength <= 128) {
    var useLowercase = confirm(
      "Would you like your password to contain a lowercase letter?"
    );
    var useUppercase = confirm(
      "Would you like your password to contain a upercase letter?"
    );
    var useNumber = confirm(
      "Would you like your password to contain a number?"
    );
    var useSpecialChar = confirm(
      "Would you like your password to contain a special character?"
    );
    // This array will be used to ensure at least one character type is selected for password generation
    var arrUserResponses = [
      useLowercase,
      useUppercase,
      useNumber,
      useSpecialChar,
    ];
    // Based on the users response this array will store the characters that will be used to generate the password
    var arrPasswordCharacters = [];
    // Checks to see if at least one response is true to ensure at least one character type has been selected
    if (arrUserResponses.some(Boolean)) {
      if (arrUserResponses[0] === true) {
        arrPasswordCharacters.push(arrLowerCase);
      }
      if (arrUserResponses[1] === true) {
        arrPasswordCharacters.push(arrUpperCase);
      }

      if (arrUserResponses[2] === true) {
        arrPasswordCharacters.push(arrNumbers);
      }

      if (arrUserResponses[3] === true) {
        arrPasswordCharacters.push(arrSpecialChar);
      }
      // Code above stores the data in multiple arrays this line of code combines into a single array
      var arrMergePassChar = arrPasswordCharacters.flat(1);
      // This array will store the final value which will be presented on the broswer
      var autoPassword = [];
      // Used to generate the random password and stor in array above
      for (let i = 0; i < pwLength; i++) {
        var randomPassword =
          arrMergePassChar[~~(Math.random() * arrMergePassChar.length)];
        autoPassword.push(randomPassword);
      }
      // Returns a string which will be presented as the Password in the browser
      return autoPassword.join("");
    } else {
      // Informs user that they did not select at least one character type and starts the function over again
      alert("Please select at least one character type.  Thanks!");
      generatePassword();
    }
  } else {
    // informs user that they did not select the approriate character length and starts the function over again
    alert(
      "Please select a password length greater than or equal to 8 and less than or equal to 128.  Thanks!"
    );
    generatePassword();
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // first prompt of how long the user wants their password to be
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));
  

//   verify the password length is valid
  if (length < 8 || length > 128 || isNaN(length)){
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return;
  }

//   prompt the user whether to use each character type
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
    
// verify that at least one of the character types was chosen
    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)){
        alert("At least one character type must be selected.");
        return;
    }

// Set the options for each character type
    var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChar = "1234567890";
    var specialChar = "!@#$%^&*(),./<>?;':[]{}|-=_+"

// Define each set of options based on the users character choices
    var characterPool = "";
    if (includeLowercase) characterPool += lowercaseChar;
    if (includeUppercase) characterPool += uppercaseChar;
    if (includeNumeric) characterPool += numericChar;
    if (includeSpecial) characterPool += specialChar;

// generate the password with all user prompts
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool.charAt(randomIndex);
    }

// Display the generated password
    var passwordText = document.querySelector("#password");
    passwordText.textContent = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

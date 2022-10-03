// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '\\',
  '%',  
  '^',
  '&',
  '*',  
  '(',
  ')',
  '-',
  '_',
  '+',
  '=',
  '~',
  '`',
  ';',
  ':',
  '[',
  ']',
  '{',
  '}',
];

var numberCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
];

var lowerCasedCharacters = [
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
  'z',
];

var upperCasedCharacters = [
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
  'Z',
];

// This Function gets the random characters from arrays
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomCharacter = arr[randomIndex];

  return randomCharacter;
}

// this Function will ask for password options
function askPassOptions() {
  // asks for password length
  var length = parseInt(prompt('How many characters would your password to be?')
  );

  if (Number.isNaN(length)) {
    alert('Please enter a number.');
    return null;
  }
  
  if (length < 8) {
    alert('Password length is too short.');
    return null;
  }

  if (length > 128) {
    alert('Password length is too long.');
    return null;
  }

  var hasSpecialCharacters = confirm(
    'Click OK to confirm for special characters'
  );

  var hasNumericCharacters = confirm(
    'Click OK to confirm for numbers'
  );

  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm for lowercase characters'
  );

  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm for uppercase characters'
  );

  if (
    hasSpecialCharacters === false && hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must have at least one character type');
    return null;
  }

  var passOptions = {
    length: length,
    specialChars: hasSpecialCharacters,
    numbers: hasNumericCharacters,
    lowercase: hasLowerCasedCharacters,
    uppercase: hasUpperCasedCharacters,
  };

  return passOptions;
}

function generatePassword() {
  var options = askPassOptions();

  var result = [];

  var allPossibleChars = [];

  var finalPass = [];

  if(!options){
    return null;
  };

  if(options.specialChars) {
    allPossibleChars = allPossibleChars.concat(specialCharacters);
    finalPass.push(getRandom(specialCharacters));
  }

  if(options.numbers) {
    allPossibleChars = allPossibleChars.concat(numberCharacters);
    finalPass.push(getRandom(numberCharacters));
  }

  if(options.lowercase) {
    allPossibleChars = allPossibleChars.concat(lowerCasedCharacters);
    finalPass.push(getRandom(lowerCasedCharacters));
  }

  if(options.uppercase) {
    allPossibleChars = allPossibleChars.concat(upperCasedCharacters);
    finalPass.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0;i < options.length;i++) {
    var passChars = getRandom(allPossibleChars);

    result.push(passChars);
  }

  for ( var i = 0;i < finalPass.length;i++) {
    result[i] = finalPass[i];
  }

  return result.join('');
}

var generateBtn = document.querySelector
('#generate');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

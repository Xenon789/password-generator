// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array for Special Characters
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

// Array for Numbers
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

// array for lower case characters
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

// array for uppercase characters
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

  // check for number
  if (Number.isNaN(length)) {
    alert('Please enter a number.');
    return null;
  }
  
  // check for length
  if (length < 8) {
    alert('Password length is too short.');
    return null;
  }

  // check for length part 2
  if (length > 128) {
    alert('Password length is too long.');
    return null;
  }

  //confirms for special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm for special characters'
  );

  //confirms for numbers
  var hasNumericCharacters = confirm(
    'Click OK to confirm for numbers'
  );

  //confirms for lowercase characters
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm for lowercase characters'
  );

  //confirms for uppercase characters
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm for uppercase characters'
  );

  // check for user character picks
  if (
    hasSpecialCharacters === false && hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must have at least one character type');
    return null;
  }

  //check for options
  var passOptions = {
    length: length,
    specialChars: hasSpecialCharacters,
    numbers: hasNumericCharacters,
    lowercase: hasLowerCasedCharacters,
    uppercase: hasUpperCasedCharacters,
  };

  return passOptions;
}

// This Function generates the password based on user specifics
function generatePassword() {
  //takes in password options
  var options = askPassOptions();

  //result is final password
  var result = [];

  //possible characters
  var allPossibleChars = [];

  //guaranteed characters
  var finPass = [];

  //check for options
  if(!options){
    return null;
  };

  //checks special chars and adds them for possible chars and guaranteed char arrays
  if(options.specialChars) {
    allPossibleChars = allPossibleChars.concat(specialCharacters);
    finPass.push(getRandom(specialCharacters));
  }

  //checks numbers and adds them for possible chars and guaranteed char arrays
  if(options.numbers) {
    allPossibleChars = allPossibleChars.concat(numberCharacters);
    finPass.push(getRandom(numberCharacters));
  }

  //checks lowercase chars and adds them for possible chars and guaranteed char arrays
  if(options.lowercase) {
    allPossibleChars = allPossibleChars.concat(lowerCasedCharacters);
    finPass.push(getRandom(lowerCasedCharacters));
  }

  //checks uppercase chars and adds them for possible chars and guaranteed char arrays
  if(options.uppercase) {
    allPossibleChars = allPossibleChars.concat(upperCasedCharacters);
    finPass.push(getRandom(upperCasedCharacters));
  }

  //adds possible chars to result
  for (var i = 0;i < options.length;i++) {
    var passChars = getRandom(allPossibleChars);

    result.push(passChars);
  }

  //adds guaranteed chars to result
  for ( var i = 0;i < finPass.length;i++) {
    result[i] = finPass[i];
  }

  //joins password together
  return result.join('');
}

//selects generate password button
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


//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// create arrays to hold possible password values
const numbers = [0,1,2,3,4,5,6,7,8,9];
let uppers = [], lowers = [];
const specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
// console.log("TCL: specialChars", specialChars)

// Generate array of upper and lowercase characters
for (let i = 65; i < 91; i++) {
    uppers.push(String.fromCharCode(i));
    lowers.push(String.fromCharCode(i).toLowerCase());
}

// console.log('TCL: upper chars: ', uppers);
// console.log('TCL: lower chars: ', lowers);
function invalidEntry(entry) {
    let value = parseFloat(entry);
    // check if isNaN(value)
    // check if value >= 8 && value <= 128
    return isNaN(value) || value < 8 || value > 128;
}
//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    let generatedPW = [];
    // define allowable characters and number of characters
    let nChars = prompt("How many chars do you want in the PW?");

    // error handle numbers
    while (invalidEntry(nChars)) {
        alert('Please enter a number between 8 and 128');
        nChars = prompt("How many chars do you want in the PW?");
    }

    // create a new array to choose chars at random
    let randoArray = [];

    while (randoArray.length === 0) {
        alert('Please select at least 1 character type from the following prompts.');
        let upperCase = confirm("Would you like UPPERCASE characters?");
        let lowerCase = confirm("Would you like lowercase characters?");
        let special = confirm("Would you like special characters?");
        let number = confirm("Would you like numbers?");
    
        if (upperCase)  randoArray.push(...uppers);
        if (lowerCase)  randoArray.push(...lowers);
        if (special)    randoArray.push(...specialChars);
        if (number)     randoArray.push(...numbers);
    }

    // console.log('TCL: randoArray: ', randoArray);
    // choose characters at random
    for (let i = 0; i < nChars; i++) {
        let randoIndex = Math.floor(Math.random() * randoArray.length);
        generatedPW.push(randoArray[randoIndex]);
    }

    return generatedPW.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
    let pwText = document.getElementById('password');
    pwText.select();
    document.execCommand('copy');
    alert('copied to clipboard!');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener('click', copyToClipboard);
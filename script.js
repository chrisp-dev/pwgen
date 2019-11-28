
//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

const numbers = [0,1,2,3,4,5,6,7,8,9];
let uppers = [], lowers = [];

const specialChars = ['!','@','#','$','%','^','&','*','(',')','?','[',']'];
// console.log("TCL: specialChars", specialChars)

for (let i = 65; i < 91; i++) {
    uppers.push(String.fromCharCode(i));
    lowers.push(String.fromCharCode(i).toLowerCase());
}

// console.log('TCL: upper chars: ', uppers);
// console.log('TCL: lower chars: ', lowers);

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    let generatedPW = [];
    // define allowable characters and number of characters
    let nChars = prompt("What number of characters long is the new password?");
    let upperCase = confirm("Would you like UPPERCASE characters?");
    let lowerCase = confirm("Would you like lowercase characters?");
    let special = confirm("Would you like special characters?");
    let number = confirm("Would you like numbers?");

    // create a new array to choose chars at random
    let randoArray = [];
    if (upperCase)  randoArray.push(...uppers);
    if (lowerCase)  randoArray.push(...lowers);
    if (special)    randoArray.push(...specialChars);
    if (number)     randoArray.push(...numbers);

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
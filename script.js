// Assignment Code
var generateBtn = document.querySelector("#generate");

//seperate list for the special characters since they're spread out in ascii
const specialCharacters = [
    "!",
    "\"",
    "#",
    "$",
    "%",
    "&",
    "\'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~"
];

//Gets all the ascii characters in a range and returns them
//97-122 for lower case
//65-90 for upper case
//48-57 for numbers
var getCharsInRange = function(start, end){
    var placeHolder = [];
    for(var curChar = start; curChar <= end; curChar++){
        placeHolder.push(String.fromCharCode(curChar));
    }
    return placeHolder;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Specifics:
// Must be a length between 8-128 characters
// Ask to include lowercase and uppercase
// Ask to include numbers 0-9 as a character
// Ask to include special characters as listed above
function generatePassword(){
    
    //Creating an array to grab different characters from
    var charactersToChooseFrom = [];

    var passWLength = prompt("Enter desired password length (between 8-128 characters)");
    //checks to make sure it's between 8 and 128 characters
    while(8 > passWLength || 128 < passWLength){
        passWLength = prompt("Please try again (between 8-128 characters)");
    }

    //Asks the user what to include and appends what they want to use to one array
    //So we can just grab a random character from there instead of having to look in multiple places
    if(confirm("Do you want to use lower case characters?")){
        charactersToChooseFrom = charactersToChooseFrom.concat(getCharsInRange(97, 122));
    }
    if(confirm("Do you want to use UPPER CASE characters?")){
        charactersToChooseFrom = charactersToChooseFrom.concat(getCharsInRange(65, 90));
    }
    if(confirm("Do you want to use numberic characters?")){
        charactersToChooseFrom = charactersToChooseFrom.concat(getCharsInRange(48, 57));
    }
    if(confirm("Do you want to use special characters?")){
        charactersToChooseFrom = charactersToChooseFrom.concat(specialCharacters);
    }
    
    //incase they select for nothing, otherwise will display undefined the length they put in times
    if(charactersToChooseFrom.length === 0){
        return "Cannot Generate Password From Given Arguments";
    }
    //Creates a string to store the password in so it can be returned
    var finalPW = "";
    //goes through each spot for a character and adds one from the list
    for(var x = 0; x < passWLength; x++){
        finalPW += charactersToChooseFrom[Math.floor(Math.random()*charactersToChooseFrom.length)];
    }

    return finalPW;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Check the strength of a password that user enters based on the following rules:
// ➔ The password is at least 8 characters long
// ➔ The password has at least one uppercase letter
// ➔ The password has at least one lowercase letter
// ➔ The password has at least one digit
// ➔ The password has at least one special character

// if the password has at least one lowercase letter, one uppercase letter, one digit, one special
// character, and at least 8 characters.
const STRONG = 'strong';
// If the password is at least six characters long and meets all the other requirements, or has no digit
// but meets the rest of the requirements.
const MEDIUM = 'medium';
// If the password entered does not meet the strong or medium-level requirements
const WEAK = 'weak';

function validatePassword(password) {
    let passwordChars = Array.from(password); 

    if (hasUppercaseLetter() && hasLowercaseLetter() && hasDigit() && hasSpecialChar() && isAtLeastCharsLong(8))
        return STRONG;
    else if ((isAtLeastCharsLong(6) && hasUppercaseLetter() && hasLowercaseLetter() && hasDigit() && hasSpecialChar())
        || (hasUppercaseLetter() && hasLowercaseLetter() && hasSpecialChar() && isAtLeastCharsLong(8)))
        return MEDIUM;
    else
        return WEAK;

    function isAtLeastCharsLong(length) {
        return password.length >= length;
    }

    function hasUppercaseLetter() {
        for (const char of passwordChars) {
            if (isUppercaseLetter(char)) {
                return true;
            }
        }
        return false;
    }

    function hasLowercaseLetter() {
        for (const char of passwordChars) {
            if (isLowercaseLetter(char)) {
                return true;
            }
        }
        return false;
    }

    function hasDigit() {
        for (const char of passwordChars) {
            if (isDigit(char)) {
                return true;
            }
        }
        return false;
    }

    function hasSpecialChar() {
        for (const char of passwordChars) {
            if (isSpecialChar(char)) {
                return true;
            }
        }
        return false;
    }

    function isUppercaseLetter(char) {
        return char.match(/[A-Z]/);//regularni
    }

    function isLowercaseLetter(char) {
        return char.match(/[a-z]/); //regex
    }

    function isDigit(char) {
        return char.match(/[0-9]/);
    }

    function isSpecialChar(char) {
        return char.match(/[\[\]?!@$%^&*-]/);
    }

}

let password = '?aAaa2';
let message = "Password strength: " + validatePassword(password);
console.log(message);

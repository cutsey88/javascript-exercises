const palindromes = function(string) {
    let reverse = '';
    let checkString = string;
    let letters = /^[A-Za-z]+$/;
    
    for (i = 1; i <= string.length; i++) {
        if (!string[string.length -i].match(letters)) {
            checkString = checkString.slice(0,string.length - i) + checkString.slice(string.length - i + 1, checkString.length);
            continue;
        } else {
            reverse += string[string.length - i];
        }
    }
    return checkString.toLowerCase() === reverse.toLowerCase();
}

module.exports = palindromes

const reverseString = function(string) {
    let output = ''
    let i = string.length
    while (i > 0) {
        output += string[i - 1];
        i--;
    }
    return output;
}

module.exports = reverseString

const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';   
    } else if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR'
    } else {
        if (num2 > num1) {
            for (let counter = num1; counter <= num2; counter++) {
                sum += counter;
            }
        } else if (num1 > num2) {
            for (let counter = num2; counter <= num1; counter++) {
                sum += counter;
            }    
        }
    return sum;
        
    }
}

module.exports = sumAll

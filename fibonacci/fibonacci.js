const fibonacci = function(place) {
    if (place < 0) {
        return 'OOPS';
    }
    if (place == 1 || place == 2) {
        return 1;
    }
    let fiboArray = [];
    for (i = 0; i < place; i++) {
        if (i == 0 || i == 1) {
            fiboArray[i] = 1;
        } else {
            fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];
        }
    }
    return fiboArray[place - 1];
}

module.exports = fibonacci

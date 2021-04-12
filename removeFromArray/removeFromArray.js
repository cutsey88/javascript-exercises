const removeFromArray = function(array, ...cutVal) {

    for (let i = 0; i < array.length; i++) {
    
        for (let j = 0; j < cutVal.length; j++) {
            if (cutVal[j] === array[i]) {
                array.splice(i, 1)
                i -= i;
            }
        }
    }
    return array;
}

module.exports = removeFromArray

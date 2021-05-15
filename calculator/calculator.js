function add (operand1, operand2) {
	return operand1 + operand2;
}

function subtract (operand1, operand2) {
	return operand1 - operand2;
}

function sum (operands) {
	let opSum = 0;
	for (i = 0; i < operands.length; i++) {
		opSum += operands[i];
	}
	return opSum;
}

function multiply (operands) {
	let opSum;
	for (i = 0; i < operands.length; i++) {
		if (!opSum) {
			opSum = operands[i];
			} else {
				opSum *= operands[i];
			}
	}
	return opSum;
}

function power(base, exponent) {
	if (exponent >= 0) {
		if (exponent === 0) {
			return 1;
		} else {
			return base * power(base, exponent -1);
		}
	}
}

function factorial(operand) {
	if (operand === 0 || operand === 1) {
		return 1;
	} else {
		return operand * factorial(operand - 1);
	};
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
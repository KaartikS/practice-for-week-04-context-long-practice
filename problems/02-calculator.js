// Your code here

class Calculator {
	constructor() {
		this.total = 0;
	}

	add = (num) => this.total += num;

	subtract = (num) => this.total -= num;

	divide = (num) => this.total / num;

	multiply = (num) => this.total *= num;
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
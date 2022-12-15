// Your code here
const Calculator = require("./02-calculator");

class FancyCalculator extends Calculator {

	setTotal = (newTotal) => this.total = newTotal;
	modulo = (num) => this.total = this.total % num;
	squared = () => this.total = this.total * this.total;

}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
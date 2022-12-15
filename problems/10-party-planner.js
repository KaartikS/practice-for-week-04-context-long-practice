// Your code here

class PartyPlanner {
	constructor() {
		this.guestList = [];
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (this.guestList.length === 0) {
			return "Gotta add people to the guest list";
		}
		else {
			let welcomeMessage = `Welcome to the party ${this.guestList[0]}`;
			for (let i = 1; i < this.guestList.length; i++) {
				let newGUest = ` and ${this.guestList[i]}`;
				welcomeMessage += newGUest;
			}
			return welcomeMessage;
		}
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
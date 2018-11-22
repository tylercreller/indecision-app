class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		// return 'Hi. I am ' + this.name + '!';
		return `Hi. I am ${this.name}!`;
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();
		if (!!this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}
		return description;
	}
}

class Traveller extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		return !!this.homeLocation
			? (greeting += ` I'm visiting from ${this.homeLocation}`)
			: greeting;
	}
}

const me = new Traveller('Tyler Creller', 25, 'New York');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
// console.log(me.hasMajor());

const other = new Traveller();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());
// console.log(other.hasMajor());

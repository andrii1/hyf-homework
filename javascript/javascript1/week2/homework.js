// FLIGHT BOOKING

function getFullname(firstname, lastname, useFormalName, gender) {
	if (typeof firstname !== "string" || firstname === "") {
		throw new Error("First name must be a non-empty string");
	}
	if (typeof lastname !== "string" || lastname === "") {
		throw new Error("Last name must be a non-empty string");
	}

	if (useFormalName) {
		if (gender === "woman") {
			console.log(`Lady ${firstname} ${lastname}`);
		} else if (gender === "man") {
			console.log(`Lord ${firstname} ${lastname}`);
		}
	} else if (
		gender !== "" &&
		typeof gender !== "undefined" &&
		gender !== "man" &&
		gender !== "woman"
	) {
		console.log("Please add a gender");
	} else {
		console.log(`${firstname} ${lastname}`);
	}
}

getFullname("Benjamin", "Hughes");
getFullname("Andrii", "Gor");
getFullname("Jessica", "Thompson", true, "woman");

/* these statements throw errors */
//getFullname();
//getFullname("", "", true, "man");
//getFullname(true);
//getFullname(true, true, true);
//getFullname(true, "man");

//EVENT WEEKDAY

function getEventWeekday(days) {
	const date = new Date();
	const weekday = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const daysAdded = date.setDate(date.getDate() + days);
	const futureDate = new Date(daysAdded);
	const dayNumber = futureDate.getDay();
	const dayOfWeek = weekday[dayNumber];
	return dayOfWeek;
}
console.log(getEventWeekday(1));
console.log(getEventWeekday(1));
console.log(getEventWeekday(1));

//WEATHER WEAR

function clothesGenerator(temp) {
	const clothes = [
		["warm jacket", "warm pants", "scarf"],
		["jacket", "pants", "sweater"],
		["shorts", "t-shirt"],
		["shorts", "white t-shirt", "cap", "bathing suit"],
	];
	if (temp < 0) {
		return clothes[0].join(" and ");
	} else if (temp < 10) {
		return clothes[1].join(" and ");
	} else if (temp < 20) {
		return clothes[2].join(" and a ");
	} else if (temp >= 20) {
		return clothes[3].join(" and ");
	}
}
const clothesToWear = clothesGenerator(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

//STUDENT MANAGER
const class07Students = [];
let alreadyInClass;
function addStudentToClass(studentName) {
	// You write code here
	if (typeof studentName === "string") {
		if (class07Students.includes(studentName)) {
			return `Student ${studentName} is already in the class`;
		} else {
			if (class07Students.length >= 6 && studentName != "Queen") {
				return "Cannot add more students to class 07";
			} else if (studentName === "") {
				return "Cannot add an empty name";
			} else {
				class07Students.push(studentName);
				return `Student ${studentName} added to the class`;
			}
		}
	} else {
		return "Please enter a correct student name";
	}
}

function getNumberOfStudents() {
	// You write code here
	return class07Students.length;
}

console.log(addStudentToClass(true));
console.log(addStudentToClass("Bob"));
console.log(addStudentToClass("Bob"));
console.log(addStudentToClass("Jessica"));
console.log(addStudentToClass("John"));
console.log(addStudentToClass("Jessica"));
console.log(addStudentToClass("Jessica"));
console.log(addStudentToClass("Jack"));
console.log(addStudentToClass("George"));
console.log(addStudentToClass("Andrii"));
console.log(addStudentToClass("Igor"));
console.log(addStudentToClass("Queen"));
console.log(getNumberOfStudents());

// CANDY HELPER
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
	switch (candyType) {
		case "Sweet":
			boughtCandyPrices.push(weight * 0.5);
			break;
		case "Chocolate":
			boughtCandyPrices.push(weight * 0.7);
			break;
		case "Toffee":
			boughtCandyPrices.push(weight * 1.1);
			break;
		case "Chewing-gum":
			boughtCandyPrices.push(weight * 0.03);
			break;
	}
	return boughtCandyPrices;
}
addCandy("Toffee", 20);
addCandy("Sweet", 10);
const amountToSpend = Math.floor(Math.random() * 100);

function canBuyMoreCandy(boughtCandyPrices, amountToSpend) {
	let sum = 0;
	for (let j = 0; j < boughtCandyPrices.length; j++) {
		sum += boughtCandyPrices[j];
	}
	if (count >= amountToSpend) {
		console.log("Enough candy for you!");
	} else {
		console.log("You can buy more, so please do!");
	}
}

canBuyMoreCandy(boughtCandyPrices, amountToSpend);

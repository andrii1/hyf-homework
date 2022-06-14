//let answers = ["123"];
let name = "";
const todos = [];

function getReply(command) {
	if (typeof command !== "string" || command === "") {
		throw new Error("Command must be a non-empty string");
	}

	if (command === "Hello my name is Benjamin" && name === "") {
		name = "Benjamin";
		return "Nice to meet you Benjamin";
	} else if (command === "Hello my name is Benjamin" && name != "") {
		return "You already added your name";
	}
	if (command === "What is my name?" && name != "") {
		return `Your name is ${name}`;
	} else if (command === "What is my name?" && name === "") {
		return "Please specify your name first";
	}

	if (command === "Add fishing to my todo") {
		todos.push("fishing");
		return "Fishing added to your todo";
	}

	if (command === "Add singing in the shower to my todo") {
		todos.push("singing in the shower");
		return "Singing in the shower added to your todo";
	}

	if (command === "Remove fishing from my todo") {
		const index = todos.indexOf("fishing");
		todos.splice(index, 1);
		return `Fishing removed from your todos ${todos}`;
	}
	if (command === "What is on my todo?") {
		return `You have ${todos.length} todos - ${todos}`;
	}
	if (command === "What day is it today?") {
		let today = new Date();
		const monthNames = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		return `Today is ${today.getDate()} of ${
			monthNames[today.getMonth()]
		} ${today.getFullYear()}`;
	}
	if (command.includes("what is")) {
		const stringOperations = command.replace(/what is/, "");
		return eval(stringOperations);
	}
	if (command.includes("Set a timer for")) {
		setTimeout(alert("Timer done"), 4000);
	}
}

//getReply(command);
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 6*3"));
//console.log(getReply("Set a timer for 4 minutes"));

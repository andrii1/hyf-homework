//ITEM REMOVAL

const names = [
	"Peter",
	"Ahmad",
	"Yana",
	"kristina",
	"Rasmus",
	"Samuel",
	"katrine",
	"Tala",
];
const nameToRemove = "Ahmad";

// Write some code here

let index = names.indexOf(nameToRemove);
names.splice(index, 1);

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// WHEN WILL BE THERE?

const travelInformation = {
	speed: 50,
	destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
	const time = travelInformation.destinationDistance / travelInformation.speed;
	//console.log(time);

	// Separate the int from the decimal part
	const hour = Math.floor(time);
	let decpart = time - hour;

	const min = 1 / 60;
	// Round to nearest minute
	decpart = min * Math.round(decpart / min);

	const minute = Math.floor(decpart * 60) + "";

	// Add padding if need
	if (minute.length < 2) {
		minute = "0" + minute;
	}

	// Concate hours and minutes
	const finaltime = `${hour} hours ${minute} minutes`;

	return finaltime;
}
const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// SERIES DURATION OF MY LIFE

const seriesDurations = [
	{
		title: "House of Cards",
		days: 2,
		hours: 12,
		minutes: 50,
	},
	{
		title: "Ozark",
		days: 1,
		hours: 17,
		minutes: 4,
	},
	{
		title: "Tiger King",
		days: 0,
		hours: 9,
		minutes: 19,
	},
];

function logOutSeriesText(seriesDurations) {
	// write code here
	let sumPercentage = 0;
	for (let i = 0; i < seriesDurations.length; i++) {
		const timeInMinutes =
			seriesDurations[i].days * 24 * 60 +
			seriesDurations[i].hours * 60 +
			seriesDurations[i].minutes;
		const percentage = (timeInMinutes / (80 * 525600)) * 100;
		console.log(
			`${seriesDurations[i].title} took ${percentage.toFixed(4)} of my life`
		);
		sumPercentage += percentage;
	}
	console.log(`In total that is ${sumPercentage.toFixed(4)} of my life`);
}

logOutSeriesText(seriesDurations);

//NONON0NOYES (NOTE TAKING APP)

const notes = [];
function saveNote(content, id) {
	if (typeof content !== "string" || content === "") {
		throw new Error("content must be a non-empty string");
	}
	if (typeof id !== "number" || id === "") {
		throw new Error("id must be a non-empty number");
	}
	notes.push({
		content,
		id,
	});
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

function getNote(id) {
	// your code here
	if (typeof id !== "number" || id === "") {
		throw new Error("id must be a non-empty number");
	}
	for (let i = 0; i < notes.length; i++) {
		if (notes[i].id === id) {
			return notes[i];
		}
	}
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
	// your code here
	for (let j = 0; j < notes.length; j++) {
		console.log(
			`The note with id: ${notes[j].id}, has the following note text: ${notes[j].content}`
		);
	}
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

//Delete note

function deleteNote(id) {
	if (typeof id !== "number" || id === "") {
		throw new Error("id must be a non-empty number");
	}
	for (let t = 0; t < notes.length; t++) {
		if (notes[t].id === id) {
			notes.splice(id - 1, 1);
		}
	}
}

deleteNote(2);

console.log(notes);

//CACTUSIO-INTERACTIVE (SMART PHONE USAGE APP)

const activities = [];
let limit;

function addActivity(activity, duration) {
	if (typeof activity !== "string") {
		throw new Error("Activity must be a string");
	}
	if (typeof duration !== "number") {
		throw new Error("Duration must be a number");
	}

	const today = new Date();
	const date = today.toLocaleDateString("en-US");

	const oneActivity = {
		date,
		activity,
		duration,
	};

	activities.push(oneActivity);
}

addActivity("Youtube", 30);

console.log(activities);

function showStatus(activities) {
	let numberOfActivities = 0;
	let durationOfActivities = 0;
	const today = new Date();
	const date = today.toLocaleDateString("en-US");
	for (let i = 0; i < activities.length; i++) {
		if (activities[0].date === date) {
			numberOfActivities++;
			durationOfActivities += activities[i].duration;
		}
	}
	if (numberOfActivities === 0) {
		console.log("Add some activities before calling showStatus");
	} else if (durationOfActivities > limit) {
		console.log("You have reached your limit, no more smartphoning for you!");
	} else {
		console.log(
			`You have added ${numberOfActivities} activities. They amount to ${durationOfActivities} min. of usage`
		);
	}
}

showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"

function setLimit(minutes) {
	limit = minutes; // I was thinking maybe creating array [activities, limit] or attaching limit to every activity e.g. (date: '6/9/2022', activity: 'Youtube', duration: 30, limit: 50)
}

setLimit(300);
addActivity("TikTok", 40);
showStatus(activities);
addActivity("Instagram", 50);
showStatus(activities); // shows that you reached the limit

function popularActivity() {
	let popularActivityDuration = 0;
	for (let i = 0; i < activities.length; i++) {
		if (activities[i].duration > popularActivityDuration) {
			popularActivityDuration = activities[i].duration;
		}
	}

	for (let j = 0; j < activities.length; j++) {
		if (activities[j].duration === popularActivityDuration) {
			console.log(
				`Your most popular activity is ${activities[j].activity}. You have spent ${activities[j].duration} minutes on it!`
			);
		}
	}
}

popularActivity();

//extra feature
function updateActivityDuration(name, duration) {
	for (let t = 0; t < activities.length; t++) {
		if (activities[t].activity === name) {
			activities[t].duration = duration;
		}
	}
}

updateActivityDuration("TikTok", 10);
showStatus(activities);

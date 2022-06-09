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

/*seriesDurations.push({
	title: "House of Cards",
	days: 2,
	hours: 16,
	minutes: 29,
});
*/

function logOutSeriesText(seriesDurations) {
	// write code here
	let sumPercentage = 0;
	for (let i = 0; i < seriesDurations.length; i++) {
		const timeInMinutes =
			seriesDurations[i].days * 24 * 60 +
			seriesDurations[i].hours * 60 +
			seriesDurations[i].minutes * 60;
		console.log(timeInMinutes);
		const percentage = (timeInMinutes / (80 * 525600)) * 100;
		console.log(
			`${seriesDurations[i].title} took ${percentage.toFixed(4)} of my life`
		);
		sumPercentage += percentage;
	}
	console.log(`In total that is ${sumPercentage.toFixed(4)} of my life`);
}

logOutSeriesText(seriesDurations);

let firstWords = ["Easy", "Nice", "Amazing", "Cool", "Fantastic", "Innovative", "Revolutionary", "Futuristic", "AI-driven", "Successful"];
let secondWords = ["Company", "Firm", "Corporation", "Startup", "Team", "Idea", "Aim", "Job", "Project", "Innovation"];
const randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log ("The startup: " + JSON.stringify(startupName) + " contains " + startupName.length + " characters")

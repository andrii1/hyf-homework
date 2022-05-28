const firstWords = ["Easy", "Nice", "Amazing", "Cool", "Fantastic", "Innovative", "Revolutionary", "Futuristic", "AI-driven", "Successful"];
const secondWords = ["Company", "Firm", "Corporation", "Startup", "Team", "Idea", "Aim", "Job", "Project", "Innovation"];
const startupName = `${firstWords[Math.floor(Math.random() * 10)]} ${secondWords[Math.floor(Math.random() * 10)]}`;
console.log (`The startup: ${JSON.stringify(startupName)} contains ${startupName.length} characters`)

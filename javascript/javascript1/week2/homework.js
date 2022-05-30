// FLIGHT BOOKING

function getFullname(firstname, lastname, useFormalName, gender) {
  if (useFormalName) {
    if (gender === "woman") {
      return `Lady ${firstname} ${lastname}`
    } else if (gender==="man") {
      return `Lord ${firstname} ${lastname}`
    }
  } else {
    return `${firstname} ${lastname}`
  }
}

getFullname("Benjamin", "Hughes");
const fullname1 = getFullname("Andrii", "Gor");
const fullname2 = getFullname("Jessica", "Thompson", true, "woman");
console.log(`${fullname1}, ${fullname2}`)

//EVENT WEEKDAY

const date = new Date();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getEventWeekday(days) {
  daysAdded = date.setDate(date.getDate() + days);
  futureDate = new Date(daysAdded)
  dayNumber = futureDate.getDay()
  dayOfWeek = weekday[dayNumber]
  return dayOfWeek
}
console.log(getEventWeekday(12))

//WEATHER WEAR
const clothes = [["warm jacket", "warm pants", "scarf"], ["jacket", "pants", "sweater"], ["shorts", "shirt", "cap"], ["shorts", "white t-shirt", "cap", "bathing suit"]];

function clothesGenerator(temp) {
  if (temp < 0) {
    return clothes[0].join(", ")
  } else if ((temp >= 0) && (temp < 10)) {
    return clothes[1].join(", ")
  } else if ((temp >= 10) && (temp < 20)) {
    return clothes[2].join(", ")
  } else if (temp >= 20) {
    return clothes[3].join(", ")
  }
}
const clothesToWear = clothesGenerator(18);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

//STUDENT MANAGER
const class07Students = [];
let alreadyInClass;
function addStudentToClass(studentName) {
  // You write code here
  for (let i = 0; i <= class07Students.length; i++) {
    if (studentName === class07Students[i]) {
      return `Student ${studentName} is already in the class`
      alreadyInClass = true;
    }
  }
  if (!alreadyInClass) {
    if ((class07Students.length >= 6) && (studentName != "Queen")) {
      return "Cannot add more students to class 07";
    } else if (studentName === "") {
      return "Cannot add an empty name";
    } else {
      class07Students.push(studentName);
      return `Student ${studentName} added to the class`
    }
  }

}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

console.log(addStudentToClass("Bob"))
console.log(addStudentToClass("Bob"))
console.log(addStudentToClass("Jessica"))
console.log(addStudentToClass("John"))
console.log(addStudentToClass("Jessica"))
console.log(addStudentToClass("Jessica"))
console.log(addStudentToClass("Jack"))
console.log(addStudentToClass("George"))
console.log(addStudentToClass("Andrii"))
console.log(addStudentToClass("Igor"))
console.log(addStudentToClass("Queen"))
console.log(getNumberOfStudents())

// CANDY HELPER
const boughtCandyPrices = [];
function addCandy(candyType, weight) {

  switch (candyType) {
  case 'Sweet':
    boughtCandyPrices.push(weight*0.5)
    break;
  case 'Chocolate':
    boughtCandyPrices.push(weight*0.7)
    break;
  case 'Toffee':
    boughtCandyPrices.push(weight*1.1)
    break;
  case 'Chewing-gum':
    boughtCandyPrices.push(weight*0.03)
    break;
}
  return boughtCandyPrices
}
addCandy("Toffee", 20);
addCandy("Sweet", 10);
const amountToSpend = Math.floor(Math.random() * 100)

function canBuyMoreCandy(boughtCandyPrices, amountToSpend) {
  let count = 0;
  for (let j=0; j<boughtCandyPrices.length; j++)
   {
    count += boughtCandyPrices[j];
    console.log('test',boughtCandyPrices[j])
   }

  if (count >= amountToSpend) {
    console.log("Enough candy for you!")
  } else {
    console.log("You can buy more, so please do!")
  }

}

canBuyMoreCandy(boughtCandyPrices, amountToSpend)

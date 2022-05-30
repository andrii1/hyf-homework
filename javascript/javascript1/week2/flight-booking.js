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

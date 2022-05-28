const dogYearOfBirth = 2020;
const dogYearFuture = 2025;
const dogYearsInHumanYears = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true;
const showDogYears = dogYearsInHumanYears * 7;
if (shouldShowResultInDogYears) { console.log(`Your dog will be ${dogYearsInHumanYears*7} dog years old in ${dogYearFuture}`) } else {
  console.log(`Your dog will be ${dogYearsInHumanYears} human years old in ${dogYearFuture}`)
}

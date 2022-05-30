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

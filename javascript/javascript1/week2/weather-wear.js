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

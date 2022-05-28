
const volumeInMeters = [8 * 10 * 10, 5 * 11 * 8];
const gardenSizeInM2 = [100, 70];
const housePricePeter = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const housePriceJulia = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;
const houseCost = [2500000, 1000000];

if (houseCost[0] > housePricePeter) {
  console.log("Peter is paying too much")
}
else if (houseCost[0] === housePricePeter) {
  console.log("Peter is paying a good price")
}
else {
  console.log("Peter is paying too little")
}
if (houseCost[1] > housePriceJulia) {
  console.log("Julia is paying too much")
} else if (houseCost[1] === housePriceJulia) {
  console.log("Julia is paying a good price")
}
else {
  console.log("Julia is paying too little")
}

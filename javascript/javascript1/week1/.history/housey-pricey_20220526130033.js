//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
//let width
//let depth
//let height
//let volumeInMeters = width * depth * height
//function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
//  return
//}

let volumeInMetersPeter = 8 * 10 * 10;
let gardenSizeInM2Peter = 100;
let volumeInMetersJulia = 5 * 11 * 8;
let gardenSizeInM2Julia = 70;
let housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
let housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
let houseCostPeter = 2500000;
let houseCostJulia = 1000000;
if (houseCostPeter > housePricePeter) { console.log("Peter is paying too much") } else { console.log("Peter is paying a good price")}

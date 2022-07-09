//EXERCISE 1

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestWord;
function findShortestWord(words) {
  if (words === "") {
    throw new Error("Array can't be empty");
  }
  words.reduce(function (a, b) {
    return a.length <= b.length ? (shortestWord = a) : b;
  });

  console.log(shortestWord);
}

findShortestWord(danishWords); // returns 'ø'

//EXERCISE 2

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
const danishCharacters = ["æ", "ø", "å"];

function findDanishLetters(string) {
  let countLetterAe = string.split("æ").length - 1;
  let countLetterO = string.split("ø").length - 1;
  let countLetterAo = string.split("å").length - 1;

  console.log(
    `{total: ${
      countLetterAe + countLetterO + countLetterAo
    }, ${ if (countLetterAe!=0) }æ: ${countLetterAe}, ø: ${countLetterO}, å: ${countLetterAo} }`
  );
}
findDanishLetters(danishString); // returns {total: 1, å: 1}

findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

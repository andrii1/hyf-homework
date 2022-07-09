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
  const letterAe = danishCharacters[0];
  const letterO = danishCharacters[1];
  const letterAo = danishCharacters[2];
  const countLetterAe = string.split(letterAe).length - 1;
  const countLetterO = string.split(letterO).length - 1;
  const countLetterAo = string.split(letterAo).length - 1;
  let logLetterAe;
  let logLetterO;
  let logLetterAo;

  if (countLetterAe != 0) {
    logLetterAe = `æ: ${countLetterAe}, `;
  } else {
    logLetterAe = "";
  }

  if (countLetterO != 0) {
    logLetterO = `ø: ${countLetterO}, `;
  } else {
    logLetterO = "";
  }

  if (countLetterAo != 0) {
    logLetterAo = `å: ${countLetterAo}`;
  } else {
    logLetterAo = "";
  }

  console.log(
    `{total: ${
      countLetterAe + countLetterO + countLetterAo
    }, ${logLetterAe}${logLetterO}${logLetterAo}}`
  );
}
findDanishLetters(danishString); // returns {total: 1, å: 1}

findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

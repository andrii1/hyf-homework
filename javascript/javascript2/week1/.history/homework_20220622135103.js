//EXERCISE 1

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
console.log(danishWords.length);
let shortestWord;
function findShortestWord(words) {
  /*for (let i=0;i<words.length;i++) {
    //console.log(words[i])
    if (words[i].length<shortestWord.length) {
      shortestWord = words[i]
    }
  }
  console.log(shortestWord);
  */
  words.reduce(function (a, b) {
    return a.length <= b.length ? (shortestWord = a) : b;
  });

  console.log(shortestWord);
}

findShortestWord(danishWords); // returns 'ø'

//EXERCISE 2

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
const danishCharacters = ["å", "ø", "æ"];
let count1 = 0;
let count2 = 0;
let count3 = 0;
let total = 0;
function findDanishLetters(string) {
  const allLettersArray = string.split("");
  for (let i = 0; i < allLettersArray.length; i++) {
    for (let j = 0; j < danishCharacters.length; j++) {
      if (allLettersArray[i] === danishCharacters[j]) {
        total++;
        if (j === 0) {
          count1++;
        } else if (j === 1) {
          count2++;
        } else if (j === 2) {
          count3++;
        }
      }
    }
  }
  console.log(`{total: ${total}, æ: 1, ø: 2, å: 1 }`);
}
findDanishLetters(danishString); // returns {total: 1, å: 1}

findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

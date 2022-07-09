const danishWords = ["bil", "plante", "kaffe", "bog", "o", "planetarium"];
console.log(danishWords.length)
let shortestWord;
function findShortestWord(words) {

  for (let i=0;i<words.length;i++) {
    console.log(words[i])
    if (words[i].length<shortestWord.length) {
      shortestWord = words[i]
    }
  }
  console.log(shortestWord);

}
findShortestWord(danishWords); // returns 'ø'
console.log("test");

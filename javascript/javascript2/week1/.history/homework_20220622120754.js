const danishWords = ["bil", "plante", "kaffe", "bog", "o", "planetarium"];

let shortestWord
function shortestWord(words) {

  for (let i=0;i<words.length;i++) {
    console.log(shortestWord.length)
    if (words[i].length<shortestWord.length) {
      shortestWord = words[i]
    }
  }
  return shortestWord;

}
console.log(shortestWord(danishWords)); // returns 'ø'
console.log("test")

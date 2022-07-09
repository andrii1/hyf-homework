const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
console.log(danishWords.length)
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
        words.reduce(function(a, b) {
    return a.length <= b.length ? shortestWord = a : b;
  })

       console.log(shortestWord)

}
findShortestWord(danishWords); // returns 'ø'

const danishWords = ["bil", "plante", "kaffe", "bog", "o", "planetarium"];

  let length = shortestword.length

function shortestWord(words) {

  for (let i=0;i<words.length;i++) {
    console.log(shortestword.length)
    if (words[i].length<shortestword.length) {
      shortestword = words[i]
    }
  }
  return shortestword;

}
console.log(shortestWord(danishWords)); // returns 'ø'
console.log("test")
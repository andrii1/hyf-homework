const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestword
  let length = shortestword.length
  //console.log(length)

   danishWords.reduce(function(a, b) {
    return a.length <= b.length ? shortestword = a : b;
  })
  console.log(shortestword)
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

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestword = "sadgasdgasdg";
  let length = shortestword.length
  console.log(length)
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
//console.log("test")
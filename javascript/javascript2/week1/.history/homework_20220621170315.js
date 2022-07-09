const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord(words) {
  let shortestword = "sadgasdgasdg";
  for (let i=0;i<words.length;i++) {
    if (words[i].length<shortestword.length) {
      shortestword = words[i]
    }
  }
  console.log(shortestword)

}
shortestWord(danishWords); // returns 'ø'

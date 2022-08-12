//exercise 2 - via Promise

const resolveAfterTime = (resolveAfter) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
resolveAfterTime(3).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});
//exercise 2 via async/await
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function resolveAfterTimeAsync(resolveAfter) {
  await timeout(resolveAfter * 1000);
  console.log("I am called asynchronously async");
}

resolveAfterTimeAsync(5);

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

//exercise 3 Rewrite time
//setTimeout as a Promise
function setTimeoutPromise(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

//currentLocation as a Promise
const getCurrentLocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//Fetching and waiting

function fetchPromise() {
  return fetch(
    "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
  );
}

//3 steps
setTimeoutPromise(3000)
  .then(fetchPromise)
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
  });

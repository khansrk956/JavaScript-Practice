// fetch('http://something.com').then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network call we use promise.
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

// resolve => .then()
promiseOne.then(function () {
  console.log("Promise consumed");
});

// second way.
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// third way.

const promiseThree = new Promise(function (resolve, reject) {
  // pass data
  setTimeout(function () {
    resolve({ username: "Sharukh", email: "srk@gmail.com" });
  }, 1000);
});

promiseThree.then(function (obj) {
  console.log(obj);
});

// fourth way

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "sharukh", password: "password" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((obj) => {
    console.log(obj);
    return obj.username;
  })
  .then((objname) => {
    console.log(objname);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected."));

//   Five way
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Hiba", password: "123" });
    } else {
      reject("Error: Hiba went wrong");
    }
  }, 1000);
});

// calling promise by using async and await. we don't handle catch.

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// https://jsonplaceholder.typicode.com/users
//  get object data

// async function getAllUsers() {
//   // object
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((resdata) => {
    console.log(resdata);
  })
  .catch((err) => console.log(err));

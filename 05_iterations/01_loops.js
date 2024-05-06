// Loop also called iteration.

// for

// for (let i = 1; i < 11; i++) {
//   console.log(`${2} * ${i}  = ${i * 2}`);
// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
// console.log("5 is best number");
//   }
//   console.log(element);
// }

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value: ${j} and inner loop ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //   console.log(`${element}`);
}

// break and continue
// to stop loop iteration use break
// to change something at given condition then we use continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is: ${i}`);
}

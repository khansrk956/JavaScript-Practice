//  ---------- SWITCH ---------

// A one value check with multiple condition.

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 4;

// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;

//   default:
//     console.log("Not key matched");
//     break;
// }

// Example -2

const month = "Feb";
switch (month) {
  case "Jan":
    console.log("january");
    break;
  case "Feb":
    console.log("February");
    break;
  case "March":
    console.log("March");
    break;
  case "April":
    console.log("April");
    break;

  default:
    console.log("No month match");
    break;
}

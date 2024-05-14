const person1 = {
  fname: "Sharukh",
  lname: "khan",
  fullName: function (hometown, place) {
    return this.fname + " " + this.lname + " " + hometown + " " + place;
  },
};

const person2 = {
  fname: "Hiba",
  lname: "saifi",
};

console.log(person1.fullName.call(person2, "pune", "Faridabad"));
console.log(person1.fullName.apply(person2, ["Jharkhand", "Delhi"]));
// console.log(person1.fullName.bind(person2, "Delhi", "faridabad"));
const result = person1.fullName.bind(person2, "Delhi", "India");
console.log(result());

// Apply - as it is same like call()
// There is only once diffence we can pass argument call() as individual but in apply() we can pass argument as a  array []

const student1 = {
  fname: "sharukh",
  lname: "khan",
  getDetails: function (district, state, street) {
    return (
      this.fname +
      " " +
      this.lname +
      " " +
      district +
      " " +
      state +
      " " +
      street
    );
  },
};

const student2 = {
  fname: "Pooja",
  lname: "sharma",
};

const data = student1.getDetails.apply(student2, [
  "Faridabad",
  "Haryana",
  "Gazipur",
]);
console.log(data);

// bind() - As it is same to call()
// difference - bind method always return a function after bind.
// It provide a copy of function of another object.

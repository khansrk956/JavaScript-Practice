// destructure in objects.

const course = {
  coursename: "JavaScript",
  price: "30,000",
  courseInstructor: "Sharukh",
};

// course.courseInstructor;
// syntantical sugar
const { courseInstructor: instructor, price: p } = course;
console.log(instructor);
console.log(p);

// const navbar = ({ company: c }) => {
//   console.log(c);
// };

// navbar({ company: "hiba" });

// APIs
// Jason

// {
//     "name":"hitesh",
//     "coursename":"javascript",
//     "price":"free"
// }

// Array form in Jason

[{}, {}, {}];

const form = document.querySelector("form");
// console.log(form)

form.addEventListener("submit", function (e) {
  e.preventDefault(); // hold the default action. do not perform any action unill I don't do. exp(submit form)

  const height = parseInt(document.querySelector("#height").value); // get the value in string convert into integer
  const weight = parseInt(document.querySelector("#weight").value); // same

  const results = document.querySelector("#results");
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give valid height.";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
   // Determine BMI category
    let category;
    if (bmi < 18.6) {
        category = "Underweight";
    } else if (bmi >= 18.6 && bmi < 24.9) {
        category = "Normal weight";
    } else {
        category = "Overweight";
    }
    
    // Display BMI and category
    results.innerHTML = `<span>BMI: ${bmi}</span><br><span>Category: ${category}</span>`;
    }

  
});

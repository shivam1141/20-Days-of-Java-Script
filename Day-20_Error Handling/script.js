const btn = document.getElementById("btn-generate-number");
const output = document.getElementById("output");
const min = document.getElementById("min");
const max = document.getElementById("max");

btn.addEventListener("click", generateNumber);

function generateNumber(event) {
  event.preventDefault();
  output.innerHTML = "Generating...";

  try {
    if (min.value > max.value) {
      throw new Error("Minimum value must be less than maximum value");
    }
    if (min.value === "" || max.value === "") {
      throw new Error("Please enter a value for minimum and maximum");
    }
    const randomNumber = Math.floor(Math.random() * (max.value - min.value + 1)) + min.value;
    output.innerHTML = `Random Number: ${randomNumber}`;
  } catch (error) {
    output.innerHTML = `An error occurred: ${error.message}`;
  }
}
let car = "truck";
console.log(car);
car = "sedan";
console.log(car);
const a = 5;
const b = 10;
console.log(a + b);

function add(a, b) {
  return a + b;
}
const answer = add(20, add(10, 30));
console.log(answer)
const button = document.getElementById("my-button");
console.log(button)

function buttonclick(e) {
  e.preventDefault();
  //add class to button
  button.classList.toggle("green");
}
button.addEventListener("click", buttonclick)
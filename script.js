// ===============================
// Part 1: Basics - Variables & Conditionals
// ===============================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let message = "";

  if (age >= 18) {
    message = "You are an adult!";
  } else if (age > 0) {
    message = "You are still a minor.";
  } else {
    message = "Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = message;
  console.log(message);
}

// ===============================
// Part 2: Functions - Reusability
// ===============================
// Function to calculate sum
function calculateTotal(a, b) {
  return a + b;
}

// Function to display sum result
function showTotal() {
  let num1 = parseFloat(document.getElementById("num1").value) || 0;
  let num2 = parseFloat(document.getElementById("num2").value) || 0;
  let total = calculateTotal(num1, num2);

  document.getElementById("totalResult").textContent = "Total: " + total;
}

// ===============================
// Part 3: Loops - Repetition
// ===============================
// Example 1: Countdown using a for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Example 2: Loop through array
function listFruits() {
  let fruits = ["Apple", "Banana", "Mango", "Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear previous

  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// ===============================
// Part 4: DOM Manipulation
// ===============================
// Toggle background color
function toggleColor() {
  document.body.classList.toggle("alt-bg");
}

// Change heading text
function changeText() {
  document.querySelector("h1").textContent = "JavaScript DOM in Action!";
}

// Add new item dynamically
function addItem() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New List Item";
  list.appendChild(li);
}

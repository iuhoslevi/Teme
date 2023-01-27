let groceries = document.querySelector(".groceries");
let clearButton = document.querySelector("#btn");
let allItems = document.querySelector("#allItems");
let userInput = document.querySelector("#userInput");

clearButton.addEventListener("click", function () {
  allItems.innerHTML = "";
});

userInput.addEventListener("keydown", function (event) {
  if (event.key == "Enter") addItem();
});

function addItem() {
  let h2 = document.createElement("h2");
  h2.innerHTML = "- " + userInput.value;
  h2.addEventListener("click", function () {
    h2.style.textDecoration = "line-through";
  });
  allItems.appendChild(h2);
  userInput.value = "";
}

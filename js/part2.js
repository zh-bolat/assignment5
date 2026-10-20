let text = document.getElementById("text");
let changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
  text.textContent = "The text has been changed!";
});

let styleBox = document.getElementById("styleBox");
let colorBtn = document.getElementById("colorBtn");
let fontBtn = document.getElementById("fontBtn");
let colors = ["lightgreen", "lightcoral", "lightyellow", "lightblue", "lightgray"];
let colorIndex = 0;
let fontSize = 16;

colorBtn.addEventListener("click", function () {
  styleBox.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

fontBtn.addEventListener("click", function () {
  fontSize += 2;
  styleBox.style.fontSize = fontSize + "px";
});

let itemList = document.getElementById("itemList");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "Item " + (itemList.children.length + 1);
  itemList.appendChild(li);
});

removeBtn.addEventListener("click", function () {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
  }
});

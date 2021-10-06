const listArray = [];

// getting the input
var hide = function (elem) {
  elem.style.display = "none";
};

document.querySelector("button").addEventListener("click", function (e) {
  e.preventDefault();

  const task = document.querySelector("input").value.trim();
  const newLi = document.createElement("li");


  newLi.appendChild(document.createTextNode(task));

  list.appendChild(newLi);


  task ? listArray.push(task) : alert("Please provide the valid input");

  (listArray.indexOf(task) + 1) % 3 === 0
    ? (newLi.style.color = "red")
    : (newLi.style.color = "black");

  input.value = "";

});

// create new li

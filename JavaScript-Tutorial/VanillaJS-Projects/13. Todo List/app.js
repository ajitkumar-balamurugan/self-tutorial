// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);
window.addEventListener("DOMContentLoaded", setupItems);

function addItem(e) {
  e.preventDefault();
  const id = new Date().getTime().toString();
  const value = grocery.value;

  if (!editFlag && value) {
    createListItem(id, value);
    displayAlert("Task added", "success");
    addToLocalStorage(id, value);
    setBackToDefault();
    // console.log("adding");
  } else if (editFlag && value) {
    editElement.innerHTML = value;
    displayAlert("Task Edited", "success");
    editLocalStorage(editId, value);
    setBackToDefault();
    // console.log("editing");
  } else {
    displayAlert("Please enter the task", "danger");
  }

  //   console.log(value);
  //   console.log(id);
}

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  //   if (items.length > 0) {
  // }
  items.forEach((item) => {
    list.removeChild(item);
  });
  container.classList.remove("show-container");
  displayAlert("List cleared", "success");
  setBackToDefault();
  localStorage.removeItem("list");
}

// ****** FUNCTIONS **********
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  list.removeChild(element);
  const id = element.dataset.id;
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("Task removed", "success");
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
  //   console.log(`edit item`);
}
// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  console.log(items);
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
  //   console.log("Adding to local storage");
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  element.setAttribute("data-id", id); //Note
  // const attr = document.createAttribute("data-id");
  // attr.value = id;
  // element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        Edit
      </button>
      <button type="button" class="delete-btn">
        Task Completed
      </button>
    </div>`;

  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
  container.classList.add("show-container");
}

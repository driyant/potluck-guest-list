// assign btn;
const assignButton = document.querySelector(".assign");
// assign item
const assignItem = document.querySelector(".assigned-items");
// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

const btnClickInvite = () => {
  addGuestButton.addEventListener("click", guess);
};

const btnClickAssign = () => {
  assignButton.addEventListener("click", assignItems);
  assignButton.disabled = true;
};

btnClickInvite();
btnClickAssign();

function guess() {
  const getGuestInput = guestInput.value;
  if (getGuestInput === "") {
    alert("Please fill in the box!");
  } else {
    let el = document.createElement("li");
    el.innerHTML = getGuestInput;
    guestList.appendChild(el);
    guestInput.value = "";
    updateGuessCount();
  }
}

function updateGuessCount() {
  const guests = document.querySelectorAll(".guest-list li");
  // console.log(guests.length);
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
}
function assignItems() {
  const potluckItems = [
    "potato salad",
    "hummus",
    "cookies",
    "lettuce iceberg",
    "genoa salami",
    "tomato",
    "black forest",
    "olive oil",
    "provolone cheese",
    "onions",
    "red onion",
    "green beans",
    "yellow wax beans",
    "baguette",
    "egg salad"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    const ranPotIndex = Math.floor(Math.random() * potluckItems.length);
    const randPotItem = ranPotIndex;
    const el = document.createElement("li");
    el.innerText = `${guest.innerText} is bringing ${potluckItems[randPotItem]}.`;
    assignItem.append(el);
    potluckItems.splice(ranPotIndex, 1);
  }
}

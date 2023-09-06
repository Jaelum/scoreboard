let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let homeCount = 0;
let guestCount = 0;
homeEl.textContent = 0;
guestEl.textContent = 0;

function addOnehome() {
  homeCount += 1;
  homeEl.textContent = homeCount;
}

function addTwohome() {
  homeCount += 2;
  homeEl.textContent = homeCount;
}

function addThreehome() {
  homeCount += 3;
  homeEl.textContent = homeCount;
}

function addOneguest() {
  guestCount += 1;
  guestEl.textContent = guestCount;
}

function addTwoguest() {
  guestCount += 2;
  guestEl.textContent = guestCount;
}

function addThreeguest() {
  guestCount += 3;
  guestEl.textContent = guestCount;
}

function startNewgame() {
  guestEl.textContent = 0;
  homeEl.textContent = 0;
  guestCount = 0;
  homeCount = 0;
}

const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkNumberBtn = document.getElementById("btn");
const IsLuckyMsg = document.getElementById("Is-Dob-lucky-msg");

function partyPop() {
  var confettiElement = document.getElementById("my-canvas");
  confettiElement.style.visibility = "visible";
  var confettiSettings = { target: confettiElement };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
  setTimeout(() => {
    confettiElement.style.visibility = "hidden";
  }, 3000);
}

function checkDobIsLucky(dob, userLuckyNumber) {
  const sumOfDobDigit = addDobDigits(dob);

  if (sumOfDobDigit % userLuckyNumber == 0) {
    IsLuckyMsg.innerText = "🥳 Your Birthday is Lucky 🥳";
    partyPop();
  } else {
    IsLuckyMsg.innerText = "Oops!! Your Birthday is Not Lucky🤪";
  }
}

function addDobDigits(dob) {
  const dobOfUser = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dobOfUser.length; i++) {
    sum += Number(dobOfUser[i]);
  }

  return sum;
}
checkNumberBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const dob = dateOfBirth.value;
  const userLuckyNumber = luckyNumber.value;
  if (dob == "" || userLuckyNumber == "") {
    IsLuckyMsg.innerText = "🙄 Enter Both Input Fields 🙄";
  } else {
    checkDobIsLucky(dob, userLuckyNumber);
  }
});

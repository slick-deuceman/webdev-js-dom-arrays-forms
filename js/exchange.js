const convertForm = document.getElementById("myForm");
const msg = document.getElementById("msg");

convertForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let pricePounds = parseFloat(document.getElementById("pounds").value);
  let exchangeRate = 0.87;
  let priceEuros = 0;

  if (isNaN(pricePounds)) {
    errorMessage("You must enter a number");
  } else {
    if (pricePounds <= 0) {
      errorMessage("You must enter more than 0");
    } else {
      priceEuros = (pricePounds * exchangeRate).toFixed(2);
      msg.style.display = "block";
      msg.innerHTML = "You will get &euro;" + priceEuros;
      msg.removeAttribute("class");
    }
  }
});

function errorMessage(message) {
  msg.style.display = "block";
  msg.innerHTML = message;
  msg.setAttribute("class", "error");
}

document.getElementById("pounds").addEventListener("focus", (e) => {
  e.target.value = "";
  msg.innerHTML = "";
  msg.removeAttribute("class");
});

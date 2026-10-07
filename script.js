const thePrice = document.getElementById("price");
const theDiscount = document.getElementById("discount");
const priceAfterOutput = document.getElementById("priceAfter");
const savedAmountOutput = document.getElementById("savedAmount");
const theButton = document.getElementById("btnCompute");
const resetButton = document.getElementById("btnReset");

// Calculation Function
function computeDiscount() {
  const priceVal = parseFloat(thePrice.value) || 0;
  const discountVal = parseFloat(theDiscount.value) || 0;

  // Calculate saved amount and new total price
  const savedAmount = priceVal * (discountVal / 100);
  const priceAfter = priceVal - savedAmount;

  // Display outputs
  savedAmountOutput.innerHTML = "&#8369;" + savedAmount;
  priceAfterOutput.innerHTML = "&#8369;" + priceAfter;
}

// Reset Function
function resetForm() {
  thePrice.value = "";
  theDiscount.value = "";
  priceAfterOutput.innerHTML = "&#8369;0.00";
  savedAmountOutput.innerHTML = "&#8369;0.00";
}

// Event Listeners
theButton.addEventListener('click', computeDiscount);
resetButton.addEventListener('click', resetForm);
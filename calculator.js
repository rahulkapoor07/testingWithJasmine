window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      updateMonthly(update());
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const totalAmount = document.getElementById('loan-amount');
  const loanYears = document.getElementById('loan-years');
  const loanRate = document.getElementById('loan-rate');
  const finalAmount = totalAmount.textContent = 50000;
  const finalYears = loanYears.textContent = 12;
  const finalRate = loanRate.textContent = 5.5;

  calculateMonthlyPayment({finalAmount, finalYears, finalRate});

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  return calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = Object.values(values)[0];
  let n = Object.values(values)[1] * 12;
  let i = (Object.values(values)[2] /100) / 12;
  
  const monthlyPayment = (p * i) / (1 - Math.pow((1 + i), -n));
  let upTo2 = monthlyPayment.toFixed(2);
  return String(upTo2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById('monthly-payment').textContent = '$' + monthly;
}

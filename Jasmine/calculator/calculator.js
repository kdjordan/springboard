window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    // setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
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
  document.getElementById("loan-amount").value = 250000
  document.getElementById("loan-years").value = 30
  document.getElementById("loan-rate").value = 3.8
  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues()
  let monthlyPayment = calculateMonthlyPayment(values)
  updateMonthly(monthlyPayment)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if(values.rate === '' || values.years === '' || values.amount === '') {
    return 'An input field is blank'
  } else {
    let i = values.rate/100/12 
    let n = values.years*12 
    let p = values.amount 
    return monthlyPayment = ((p * i)/(1-((1+i)**(-n)))).toFixed(2)
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = '$' + monthly
}

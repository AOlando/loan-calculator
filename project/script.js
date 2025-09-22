// Selecting elements
const amount = document.querySelector("#amount");
const rate = document.querySelector("#rate");
const years = document.querySelector("#years");
const calculate = document.querySelector("#calculate");
const error = document.querySelector('#error');
const reset = document.querySelector('#reset');
const monthly = document.querySelector('#monthly');

const total = document.querySelector('#total');


calculate.addEventListener('click', () => {
    const amountValue = parseFloat(amount.value); // Getting the user's input 

    const rateValue = parseFloat(rate.value); // Getting the user's input
    
    const yearsValue = parseFloat(years.value); // Getting the user's input

   if (amount.value === '') {
    amount.focus();
    error.textContent = "Loan amount cannot be empty";
    error.style.color = "white";
   } 

   const result = ((amountValue * rateValue * yearsValue) / 100) + amountValue;
//    Percentage = (Part / Whole) * 100;

   total.textContent = result;
   total.style.color = "green";
   
   const monthlyCalc = result / (yearsValue * 12);

   monthly.textContent = monthlyCalc.toFixed(2);
   console.log("Real monthly value:", monthlyCalc);
   
   monthly.style.color = "green";
    
    
})

reset.addEventListener("click", () => {
    amount.value = "";
    rate.value = "";
    years.value = "";
    total.textContent = "0.00";
    total.style.color = "black";
    monthly.textContent = "0.00";
    monthly.style.color = "black";
    error.textContent = "";
})

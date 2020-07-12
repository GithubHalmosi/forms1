function calcAmount(){
    let price = 1000
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}

function showSumPrice(price = 1000, amountNumber = 1) {
    amountNumber = amountNumber || 0;
    if (amountNumber > 10) {
        alert("maximum 10 terméket vásárolhat");
    }
    else if (amountNumber < 1) {
        alert("minimum 1 terméket kell vásárolnia");
    }
    else {
        let showAmount = document.querySelector("span.show-amount");
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}

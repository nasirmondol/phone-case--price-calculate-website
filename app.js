
// handle update phone total
document.getElementById('phone-plus').addEventListener('click', function(){
    updateNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateNumber('phone', 1219, false);
})

// update the phone and casing total
function getInputValue(product){
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10;
    const total = subTotal + tax;

    // update the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = tax;
    document.getElementById('total-price').innerText = total;
}

// handle update case total
function updateNumber(product, price, isIncrease){
    const productInput = document.getElementById( product + '-number')
    let productNumber = productInput.value;
    if(isIncrease == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // Update subTotal
    calculateTotal();

    // update case total
    const totalNumber = document.getElementById(product + '-total')
    totalNumber.innerText = productNumber * price;
}

document.getElementById('case-btn').addEventListener('click', function(){
    updateNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateNumber('case', 59, false);
})


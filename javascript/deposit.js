let newDepositAmount; // Declare newDepositAmount in a wider scope

document.getElementById('btn-deposit').addEventListener('click', function(){
    // get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    newDepositAmount = parseFloat(newDepositAmountString);

    // get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    // calculate current total balance
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // clear the deposit field
    depositField.value = ''; 

    // Save the current deposit total to localStorage
    localStorage.setItem('lastDepositTotal', currentDepositTotal);
    // Save the current balance total to localStorage
    localStorage.setItem('lastBalanceAmount', currentBalanceTotal);
});

// Retrieve the last deposit total and balance on page load
window.addEventListener('load', function () {
    const lastDepositTotal = localStorage.getItem('lastDepositTotal');
    const lastBalanceAmount = localStorage.getItem('lastBalanceAmount');
    if (lastDepositTotal !== null && lastBalanceAmount !== null) {
        const depositTotalElement = document.getElementById('deposit-total');
        depositTotalElement.innerText = lastDepositTotal;

        const balanceTotalElement = document.getElementById('balance-total');
        balanceTotalElement.innerText = lastBalanceAmount;
    }
});

























// // step_1: add event listener to the deposit button
// document.getElementById('btn-deposit').addEventListener('click', function(){
//     // step_2: get the deposit amount from the deposit inpt field
//     // for input field use .value to the value inside the input field
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;
//     newDepositAmount = parseFloat(newDepositAmountString);

//     // console.log(typeof newDepositAmount);
//     // step_3: get the current deposit total
//     const depositTotalElement = document.getElementById('deposit-total');
//     const previousDepositTotalString = depositTotalElement.innerText;
//     // console.log(typeof previousDepositTotal);
//     const previousDepositTotal = parseFloat(previousDepositTotalString);

//     // step_4: add numbers to set the total deposit
//     const currentDepositTotal = previousDepositTotal + newDepositAmount;
//     // set the deposit total
//     depositTotalElement.innerText = currentDepositTotal;

//     // step_5: get balance current total
//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//     // step_6: calculate current total balance
//     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//     // set the balance total
//     balanceTotalElement.innerText = currentBalanceTotal;
//     // step_7: clear the deposit field
//     depositField.value = ''; 
// })
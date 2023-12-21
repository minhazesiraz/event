let newWithdrawAmount; // Declare newWithdrawAmount in a wider scope

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElement.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    // Check if the withdrawal amount is greater than the balance
    if (newWithdrawAmount > balanceTotalAmount) {
        alert('Withdrawal amount cannot be greater than the available balance.');
    } else {
        // Proceed with the withdrawal
        // get the current withdraw total
        const withdrawTotalElement = document.getElementById('withdraw-total');
        const withdrawTotalAmountString = withdrawTotalElement.innerText;
        const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);

        // calculate current total withdraw
        const currentWithdrawTotal = newWithdrawAmount + withdrawTotalAmount;
        // set the withdraw total
        withdrawTotalElement.innerText = currentWithdrawTotal;

        // calculate current total balance
        const currentBalanceAmount = balanceTotalAmount - newWithdrawAmount;
        // set the balance total
        balanceTotalElement.innerText = currentBalanceAmount;

        // Save the withdraw amount to localStorage
        localStorage.setItem('lastWithdrawAmount', currentWithdrawTotal); // Store the current total withdraw
        localStorage.setItem('lastBalanceAmount', currentBalanceAmount); // Store the current balance
    }

    // clear the withdraw field
    withdrawField.value = ''; 
});

// Retrieve the last withdraw amount and balance on page load
window.addEventListener('load', function () {
    const lastWithdrawAmount = localStorage.getItem('lastWithdrawAmount');
    const lastBalanceAmount = localStorage.getItem('lastBalanceAmount');
    if (lastWithdrawAmount !== null && lastBalanceAmount !== null) {
        const withdrawTotalElement = document.getElementById('withdraw-total');
        withdrawTotalElement.innerText = lastWithdrawAmount;

        const balanceTotalElement = document.getElementById('balance-total');
        balanceTotalElement.innerText = lastBalanceAmount;
    }
});



































// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
//     const balanceTotalElement = document.getElementById('balance-total');
//     const balanceTotalAmountString = balanceTotalElement.innerText;
//     const balanceTotalAmount = parseFloat(balanceTotalAmountString);

//     // Check if the withdrawal amount is greater than the balance
//     if (newWithdrawAmount > balanceTotalAmount) {
//         alert('Withdrawal amount cannot be greater than the available balance.');
//     } else {
//         // Proceed with the withdrawal
//         const withdrawTotalElement = document.getElementById('withdraw-total');
//         const withdrawTotalAmountString = withdrawTotalElement.innerText;
//         const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);
        
//         const currentWithdrawTotal = newWithdrawAmount + withdrawTotalAmount;
//         withdrawTotalElement.innerText = currentWithdrawTotal;

//         const currentBalanceAmount = balanceTotalAmount - newWithdrawAmount;
//         balanceTotalElement.innerText = currentBalanceAmount;

//         withdrawField.value = ''; 
//     }
// });
































// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    

//     const withdrawTotalElement = document.getElementById('withdraw-total');
//     const withdrawTotalAmountString = withdrawTotalElement.innerText;
//     const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);
    
//     const currentWithdrawTotal = newWithdrawAmount + withdrawTotalAmount;

//     withdrawTotalElement.innerText = currentWithdrawTotal;


//     const balanceTotalElement = document.getElementById('balance-total');
//     const balanceTotalAmountString = balanceTotalElement.innerText;
//     const balanceTotalAmount = parseFloat(balanceTotalAmountString);

//     const currentBalanceAmount = balanceTotalAmount - newWithdrawAmount;
//     balanceTotalElement.innerText = currentBalanceAmount;


//     withdrawField.value = ''; 
// })
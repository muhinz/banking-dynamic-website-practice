// step-1: add event-listener to deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the value from the input field 
    const depositField = document.getElementById('deposit-amount');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
    
    // step-3: get current deposit total 
    // for non-input (other than input, text area) use innertext to get the value 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add deposite
    const currentDepositAmount = previousDepositTotal + newDepositAmount;
    // set the new deposit 
    depositTotalElement.innerText = currentDepositAmount;

    // step-5: get balance current total deposite amount 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: set the current balance with new deposite 
    const currentBalance = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalance;

    // step-7: empty deposit field 
    depositField.value = '';
})
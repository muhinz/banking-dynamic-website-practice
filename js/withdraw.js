// step -1 

document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount)

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-4

    const currentWithdrawAmount = previousWithdrawTotal + newWithdrawAmount;

    // set the value in withdraw field 
    withdrawTotalElement.innerText = currentWithdrawAmount;

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
    const currentBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalance;

    // step-7: empty  field 
    withdrawField.value = '';

})
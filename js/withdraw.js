document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdraw = document.getElementById('withdraw-field');
    console.log(inputWithdraw);
    const newWithdrawAmount = inputWithdraw.value;
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    const currentWithdrawtTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
    withdrawTotalElement.innerText = currentWithdrawtTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotalElement.innerText = currentBalanceTotal;
    
    inputWithdraw.value = '';
})
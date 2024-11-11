document.getElementById('btn-cashout-money').addEventListener('click', function (event) {
 event.preventDefault();
 const cashoutMoney = getInputFieldValueById('input-cashout-money');
 const pinNumber = getInputFieldValueById('pin-number');
 
 if (pinNumber === 1234) {
  const balance = getTextFieldValueById('account-balance');  
  const newBalance = balance - cashoutMoney;
  document.getElementById('account-balance').innerText = newBalance
 } else {
  alert('no money for you')
 }
 
});
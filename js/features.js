document.getElementById('show addmoney-form').addEventListener('click', function () {
 console.log('show add money clicked');
 showSectionById('addmoney-form');
});
document.getElementById('show-cashout-form').addEventListener('click', function () {
 showSectionById('cashout-form');
 document.getElementById('transaction-form').addEventListener('click', function () {
  showSectionById('transaction-section');
 });
});
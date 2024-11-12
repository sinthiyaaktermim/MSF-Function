document
  .getElementById('btn-add-money')
  .addEventListener('click', function (event) {
    event.preventDefault();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value ', addMoney);
    const addMoney = getInputFieldValueById('input-add-money');

    const pinNumber = getInputFieldValueById('input-pin-number');
    if (pinNumber === 1234) {
      const Balance =getTextFieldValueById('account-balance');
     const newBalance = Balance + addMoney;
      document.getElementById('account-balance').innerText = newBalance;
      
      // add transaction history
      const p = document.createElement('p');
      p.innerText = `Added:${addMoney} tk.Balance: ${newBalance}`;
      console.log(p);
    } else {
      alert('failed to add the money');
    }
  });

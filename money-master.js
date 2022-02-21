//uwallet opening js
document.getElementById('submit').addEventListener('click',function(){
  //get user email
  const userField = document.getElementById('user-email')
   const userEmail = userField.value;
   //shorthand : const userField = document.getElementById('user-email').value;
   //get user pass
   const userPassword = document.getElementById('user-password')
   const userPass = userPassword.value;
    //shorthand : const userField = document.getElementById('user-password').value;
    //check
   if(userEmail == 'sahedhasan@gmail.com' && userPass == '1234'){
       //redirect to another page
  window.location.href = 'index.html';
   }
 
})


//calculate function
document.getElementById('calculate-btn').addEventListener('click',function (){
    const foodAmmount = document.getElementById('food-ammount');
    const rentAmmount = document.getElementById('rent-ammount');
    const clothesAmmount = document.getElementById('clothes-ammount');

    let total = parseInt(foodAmmount.value) + parseInt(rentAmmount.value) + parseInt(clothesAmmount.value);

    let totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = total;
    //balance after all cost
    const ammount = document.getElementById('main-ammount');
    const mainAmmount = parseInt (ammount.value);
     const balance = document.getElementById('balance');
      balance.innerText = mainAmmount - total;
})
//save function
document.getElementById('save-btn').addEventListener('click',function(){
    const saveInput = document.getElementById('save-field').value;
    const saveInputAmmount = parseInt(saveInput);
    let savingAmmount = document.getElementById('saving-ammount');
    //main income
    const ammount = document.getElementById('main-ammount');
    const mainAmmount = parseInt (ammount.value);
    //saveing money
    savingAmmount.innerText = (mainAmmount * saveInputAmmount)/100;

    //Remaining balance
    const foodAmmount = document.getElementById('food-ammount');
    const rentAmmount = document.getElementById('rent-ammount');
    const clothesAmmount = document.getElementById('clothes-ammount');

    let total = parseInt(foodAmmount.value) + parseInt(rentAmmount.value) + parseInt(clothesAmmount.value);

    let totalExpense = document.getElementById('total-expense');
    totalExpense.innerText = total;
    //balance after all cost
  let balance = document.getElementById('balance');
  balance.innerText = mainAmmount - total;
//get remaing money
    let remaining = document.getElementById('remaining');
    remaining.innerText = parseInt(balance.innerText) - parseInt( savingAmmount.innerText);
})
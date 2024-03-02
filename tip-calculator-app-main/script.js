//select the elements

const billInput = document.querySelector('#bill');
const tipBTNS = document.querySelectorAll('.btn');
const customInput = document.querySelector('#custom');
const numberOfPeople = document.querySelector('#noOPeople');
const perPersonBox = document.querySelector('.perPersonBox');
const totalTipBox = document.querySelector('.totalTipBox');
const errorMessage = document.querySelector('.error');
const resetBTN = document.querySelector('input[type="reset"]');
//element to be tracked and updated

let tipPerPerson = 0;
let totalTip = 0;

function updateUI(num) {
  tipPerPerson =
    (+billInput.value / +numberOfPeople.value) * (Number(num) / 100);
  totalTip = +billInput.value / +numberOfPeople.value + tipPerPerson;
  perPersonBox.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalTipBox.textContent = `$${totalTip.toFixed(2)}`;
}

//event listener

tipBTNS.forEach(btn => {
  btn.addEventListener('click', e => {
    number = e.target.dataset.per;
    if (+numberOfPeople.value === 0) {
      numberOfPeople.classList.add('error');
      errorMessage.classList.add('visible');
    } else {
      numberOfPeople.classList.remove('error');
      errorMessage.classList.remove('visible');
      customInput.value = '';
      updateUI(number);
      resetBTN.disabled = false;
    }
  });
});

customInput.addEventListener('input', () => {
  if (+numberOfPeople.value === 0) {
    numberOfPeople.classList.add('error');
    errorMessage.classList.add('visible');
  } else {
    numberOfPeople.classList.remove('error');
    errorMessage.classList.remove('visible');
    updateUI(customInput.value);
    resetBTN.disabled = false;
  }
});

resetBTN.addEventListener('click', () => {
  billInput.value = '';
  customInput.value = '';
  numberOfPeople.value = '';
  tipPerPerson = 0;
  totalTip = 0;
  totalTipBox.textContent = '$0.00';
  perPersonBox.textContent = '$0.00';
  resetBTN.disabled = true;
});

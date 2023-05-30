window.addEventListener('DOMContentLoaded', () => {
  const yearInput = document.getElementById('year-input');
  const resultDiv = document.getElementById('result');

  yearInput.addEventListener('input', () => {
    const year = parseInt(yearInput.value);
    
    if (isNaN(year)) {
      resultDiv.textContent = '';
      resultDiv.style.backgroundColor = '';
      return;
    }
    
    const isLeapYear = checkLeapYear(year);
    const horarySign = getHorarySign(year);
    
    resultDiv.textContent = `${year} is a ${isLeapYear ? 'leap year' : 'common year'}. The horary sign is ${horarySign}.`;
    resultDiv.style.backgroundColor = isLeapYear ? 'lightgreen' : 'lightcoral';
  });
});

function checkLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function getHorarySign(year) {
  const horarySigns = [
    'Rat',
    'Ox',
    'Tiger',
    'Rabbit',
    'Dragon',
    'Snake',
    'Horse',
    'Sheep',
    'Monkey',
    'Rooster',
    'Dog',
    'Pig'
  ];
  
  return horarySigns[(year - 4) % 12];
}

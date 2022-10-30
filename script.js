const bar = document.querySelector('.progress_bar');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const numbers = document.querySelectorAll('.number');
let counter = 1;
next.addEventListener('click', () => {
  counter++;
  prev.disabled = false;
  if (counter === numbers.length) {
    numbers[counter - 1].classList.add('active');
    bar.style.width = ((counter - 1) / (numbers.length - 1)) * 100 + '%';
    next.disabled = 'true';
  } else if (counter > numbers.length) {
    counter = numbers.length;
  } else {
    numbers[counter - 1].classList.add('active');
    bar.style.width = ((counter - 1) / (numbers.length - 1)) * 100 + '%';
  }
});
prev.addEventListener('click', () => {
  counter--;
  next.disabled = false;
  if (counter === 1) {
    numbers[counter].classList.remove('active');
    prev.disabled = 'true';
    bar.style.width = ((counter - 1) / (numbers.length - 1)) * 100 + '%';
  } else if (counter < 1) {
    counter = 1;
  } else {
    numbers[counter].classList.remove('active');
    bar.style.width = ((counter - 1) / (numbers.length - 1)) * 100 + '%';
  }
});

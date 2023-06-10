// Part-1
const emailInput = document.querySelector('#emailInput')
const emailCheck = document.querySelector('#emailCheck')
const emailResult = document.querySelector('.emailResult')

const regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
emailCheck.onclick = () => {
  if (regExp.test(emailInput.value)) {
    emailResult.innerHTML = 'Удалось найти аккаунт'
    emailResult.style.color = 'green'
  } else {
    emailResult.innerHTML = 'Не удалось найти аккаунт'
    emailResult.style.color = 'red'
  }
}
// Part-2

let position = 0
const recursionAnimation = () => {
  position = position + 10;
  if (position > 1100) return;
  document.querySelector('.child_block').style.left = position + 'px';
  animation()
}
const animation = () => { setTimeout(recursionAnimation, 100); }
animation();

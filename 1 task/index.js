const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Делаем глобальную переменную для замены таймера
let interval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
      interval = setInterval(() => {
        if (seconds >= 0) {
          convertSeconds(seconds)
          seconds = seconds - 1;
        }}, 1000)
    }
};

// Функция для конвертации даты
function convertSeconds(seconds) {
  // Конвертация секунд в удобный формат даты: ч:м:с
  let h = Math.floor(seconds / 3600);
  let m = Math.floor(seconds % 3600 / 60);
  let s = Math.floor(seconds % 3600 % 60);  
  // Более красивый формат в виде чч:мм:сс
  if (h < 10) h = `0${h}`
  if (m < 10) m = `0${m}`
  if (s < 10) s = `0${s}`
  timerEl.innerHTML = `${h}:${m}:${s}`;
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Резрешаем только цифры через regex.
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  // Если, пока идет таймер, ставится еще таймер, то мы заменяем первый таймер на второй
  clearInterval(interval);
  animateTimer(seconds);
  inputEl.value = '';
});

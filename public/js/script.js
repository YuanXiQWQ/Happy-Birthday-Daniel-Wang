// public/js/script.js

let currentCakeIndex = 0;
let cakesEaten = 0; // 记录吃掉的蛋糕数量

function cutCake() {
  const cakeImage = document.getElementById('cakeImage');

  if (currentCakeIndex < 6) {
    currentCakeIndex++;
    cakeImage.src = `/images/${currentCakeIndex}.webp`;
  } else {
    cakeImage.classList.add('hidden'); // 隐藏但保留空间
  }
}

function resetCake() {
  const cakeImage = document.getElementById('cakeImage');
  const cakeCounter = document.getElementById('cakeCounter');

  currentCakeIndex = 0;
  cakeImage.src = `/images/${currentCakeIndex}.webp`;
  cakeImage.classList.remove('hidden'); // 显示图片

  // 每次重置蛋糕时，计数器加1
  cakesEaten++;
  cakeCounter.textContent = cakesEaten;

  // 如果计数器是10的整数倍，添加果冻效果
  if (cakesEaten % 10 === 0) {
    addJellyEffect(cakeImage); // 添加果冻效果
  }
}

// 添加果冻效果
function addJellyEffect(element) {
  element.classList.add('jelly'); // 添加果冻效果的类
  setTimeout(() => {
    element.classList.remove('jelly'); // 1秒后移除果冻效果类
  }, 1000);
}

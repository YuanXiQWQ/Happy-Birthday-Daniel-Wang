// public/js/script.js

let currentCakeIndex = 0;
let cakesEaten = 0;

function cutCake() {
  const cakeImage = document.getElementById('cakeImage');

  if (currentCakeIndex < 6) {
    currentCakeIndex++;
    cakeImage.src = `/images/${currentCakeIndex}.webp`;
  } else {
    // 隐藏但保留空间
    cakeImage.classList.add('hidden');
  }
}

/**
 * 重置蛋糕
 */
function resetCake() {
  const cakeImage = document.getElementById('cakeImage');
  const cakeCounter = document.getElementById('cakeCounter');

  currentCakeIndex = 0;
  cakeImage.src = `/images/${currentCakeIndex}.webp`;
  // 显示图片
  cakeImage.classList.remove('hidden');

  // 计数器++
  cakesEaten++;
  cakeCounter.textContent = cakesEaten;

  // 如果计数器是5的整数倍，更换效果
  if (cakesEaten % 5 === 0) {
    // 添加果冻效果
    addJellyEffect(cakeImage);
  } else {
    // 添加拍到桌子上的效果
    addSlamEffect(cakeImage);
  }
}

/**
 * 添加果冻效果
 *
 * @param element 要添加果冻效果的元素
 */
function addJellyEffect(element) {
  // 添加果冻效果的类
  element.classList.add('jelly');
  setTimeout(() => {
    // 1秒后移除果冻效果类
    element.classList.remove('jelly');
  }, 1000);
}

/**
 * 添加拍到桌子上的效果
 *
 * @param element 要添加拍到桌子上的效果的元素
 */
function addSlamEffect(element) {
  // 添加拍到桌子上的效果类
  element.classList.add('slam');
  setTimeout(() => {
    // 0.5秒后移除拍到桌子上的效果类
    element.classList.remove('slam');
  }, 500);
}

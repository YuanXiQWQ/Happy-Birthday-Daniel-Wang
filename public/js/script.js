// public/js/script.js

let currentCakeIndex = 0;

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

  currentCakeIndex = 0;
  cakeImage.src = `/images/${currentCakeIndex}.webp`;
  cakeImage.classList.remove('hidden'); // 显示图片
}

// public/js/script.js

// 定义当前图片索引
let currentCakeIndex = 0;

// 蛋糕切割函数
function cutCake() {
  // 获取图片元素
  const cakeImage = document.getElementById('cakeImage');

  // 如果蛋糕图片存在且没有切完
  if (currentCakeIndex < 6) {
    // 增加图片索引
    currentCakeIndex++;
    // 更新图片路径
    cakeImage.src = `/images/${currentCakeIndex}.webp`;
  } else {
    // 当蛋糕切完，隐藏图片
    cakeImage.style.display = 'none';
  }
}

// 重置蛋糕函数
function resetCake() {
  // 获取图片元素
  const cakeImage = document.getElementById('cakeImage');

  // 重置图片索引
  currentCakeIndex = 0;
  // 恢复图片路径为初始状态
  cakeImage.src = `/images/${currentCakeIndex}.webp`;
  // 显示图片
  cakeImage.style.display = 'block';
}

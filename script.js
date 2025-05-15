// script.js

document.getElementById('trigger-button').addEventListener('click', () => {
  const images = document.querySelectorAll('.animated-image');
  images.forEach((img, index) => {
    // ランダムなX, Y方向の移動距離を計算
    const offsetX = Math.random() * -200 - 100; // -100pxから-300pxの範囲
    const offsetY = Math.random() * -200 - 100; // -100pxから-300pxの範囲

    // アニメーションの遅延時間を設定
    const delay = index * 100; // 各画像のアニメーションを100msずつ遅らせる

    setTimeout(() => {
      img.style.opacity = 1;
      img.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.5)`;
    }, delay);

  });
});

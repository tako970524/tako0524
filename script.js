lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: false,       // 不重複播放
  autoplay: true,    // 自動播放
  path: 'anime/data.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
}).addEventListener('complete', function () {
  // 動畫播完後自動停留在最後一幀
  this.goToAndStop(this.totalFrames, true);
});

function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

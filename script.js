lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'anime/data.json',
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
}).addEventListener('complete', function () {
  this.goToAndStop(this.totalFrames, true);
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const menuLinks = sideMenu.querySelectorAll("a");

  // 漢堡點擊開關選單
  hamburger.addEventListener("click", function () {
    sideMenu.classList.toggle("open");
  });

  // 點選任一選單自動關閉選單
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      sideMenu.classList.remove("open");
    });
  });
});

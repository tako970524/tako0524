// 首頁Lottie LOGO動畫
lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'anime/data.json', //Lottie JSON檔案路徑
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid meet'
  }
}).addEventListener('complete', function () {
  //動畫結束後停在最後一幀
  this.goToAndStop(this.totalFrames, true);
});

document.addEventListener("DOMContentLoaded", function () {
  const sideMenu = document.getElementById("sideMenu");
  const lottieContainer = document.getElementById("hamburger-lottie");

  let menuOpen = false;
  let animationReady = false;

  // 載入漢堡動畫
  const animation = lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'anime/ham.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });

  // 等動畫資料準備好後再標記為可操作
  animation.addEventListener('data_ready', () => {
    animation.goToAndStop(0, true);
    animationReady = true;
  });

  // 防止動畫還沒準備好時點擊出錯
  lottieContainer.addEventListener('click', () => {
    if (!animationReady) return; // 尚未準備好

    if (!menuOpen) {
      sideMenu.classList.add("open");
      animation.playSegments([0, animation.totalFrames], true);
    } else {
      sideMenu.classList.remove("open");
      animation.playSegments([animation.totalFrames, 0], true);
    }
    menuOpen = !menuOpen;
  });

  // 點選選單連結時也觸發動畫關閉
  document.querySelectorAll('#sideMenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (menuOpen && animationReady) {
        sideMenu.classList.remove("open");
        animation.playSegments([animation.totalFrames, 0], true);
        menuOpen = false;
      }
    });
  });
});
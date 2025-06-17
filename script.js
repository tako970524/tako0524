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
  const sideMenu = document.getElementById("sideMenu"); //側邊選單
  const lottieContainer = document.getElementById("hamburger-lottie"); //漢堡動畫容器

  let menuOpen = false; //記錄選單是否展開

  //載入漢堡選單動畫
  const animation = lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'anime/ham.json', //自製動畫JSON
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    }
  });

  //動畫載入完成後停在第一幀
  animation.addEventListener('DOMLoaded', () => {
    animation.goToAndStop(0, true);
  });

  //點擊漢堡動畫控制展開/收合
  lottieContainer.addEventListener('click', () => {
    if (!menuOpen) {
      //開啟選單+正向播放動畫
      sideMenu.classList.add("open");
      animation.playSegments([0, animation.totalFrames], true);
      menuOpen = true;
    } else {
      //關閉選單+倒著播放動畫
      sideMenu.classList.remove("open");
      animation.playSegments([animation.totalFrames, 0], true);
      menuOpen = false;
    }
  });

  //點選選單連結時自動關閉選單並播放動畫倒退
  document.querySelectorAll('#sideMenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (menuOpen) {
        sideMenu.classList.remove("open");
        animation.playSegments([animation.totalFrames, 0], true);
        menuOpen = false;
      }
    });
  });
});

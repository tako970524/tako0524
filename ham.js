document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const menuLinks = sideMenu.querySelectorAll("a");

  // 載入 bodymovin 動畫
  const hamburgerAnim = lottie.loadAnimation({
    container: hamburger,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'anime/ham.json'
  });

  // 初始停在第一幀
  hamburgerAnim.goToAndStop(0, true);

  // 開關選單 + 動畫控制
  let menuOpen = false;

  hamburger.addEventListener("click", function () {
    if (!menuOpen) {
      // 正向播放（開啟選單）
      hamburgerAnim.setDirection(1);
      hamburgerAnim.play();
      sideMenu.classList.add("open");
    } else {
      // 反向播放（關閉選單）
      hamburgerAnim.setDirection(-1);
      hamburgerAnim.play();
      sideMenu.classList.remove("open");
    }
    menuOpen = !menuOpen;
  });

  // 點選選單連結時也反向動畫並收起選單
  menuLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (menuOpen) {
        hamburgerAnim.setDirection(-1);
        hamburgerAnim.play();
        sideMenu.classList.remove("open");
        menuOpen = false;
      }
    });
  });
});

  //載入bodymovin動畫
  const hamburgerAnim = lottie.loadAnimation({
    container: document.getElementById('hamburger'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'anime/ham.json'
  });

  //停留第一幀
  hamburgerAnim.goToAndStop(0, true);

  let menuOpen = false;

  document.getElementById('hamburger').addEventListener('click', function () {
    const sideMenu = document.getElementById('sideMenu');

    if (!menuOpen) {
      hamburgerAnim.setDirection(1); // 正向
      hamburgerAnim.play();
      sideMenu.classList.add('open');
    } else {
      hamburgerAnim.setDirection(-1); // 反向
      hamburgerAnim.play();
      sideMenu.classList.remove('open');
    }

    menuOpen = !menuOpen;
  });
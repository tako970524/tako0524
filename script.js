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
  const sideMenu = document.getElementById("sideMenu");
  const lottieContainer = document.getElementById("hamburger-lottie");

  let menuOpen = false;

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

  animation.addEventListener('DOMLoaded', () => {
    animation.goToAndStop(0, true);
  });

  lottieContainer.addEventListener('click', () => {
    if (!menuOpen) {
      sideMenu.classList.add("open");
      animation.playSegments([0, animation.totalFrames], true);
      menuOpen = true;
    } else {
      sideMenu.classList.remove("open");
      animation.playSegments([animation.totalFrames, 0], true);
      menuOpen = false;
    }
  });

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
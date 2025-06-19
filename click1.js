const animation = lottie.loadAnimation({
    container: document.getElementById("hamburger"),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'anime/ham.json' // 你的動畫 JSON 路徑
});

animation.addEventListener('DOMLoaded', () => {
    animation.goToAndStop(0, true); // 載入後定格第一幀
});

document.getElementById("lottie").onclick = () => {
    animation.play(); // 點擊播放動畫
};
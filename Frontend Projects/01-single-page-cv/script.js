// 计算header高度并设置CSS变量
function setHeaderHeight() {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

// 页面加载完成后执行
window.addEventListener('load', setHeaderHeight);

// 窗口大小改变时重新计算
window.addEventListener('resize', setHeaderHeight); 
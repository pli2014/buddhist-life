/**
 * 导航栏组件 - 统一管理全站导航
 * Navigation Bar Component
 */

// 页面配置数据
const pages = [
    { id: 'life-system', name: '生命系统', path: 'life-system.html', icon: '🧬' },
    { id: 'health', name: '身心健康', path: 'health.html', icon: '🧘' },
    { id: 'wealth', name: '财富福报', path: 'wealth.html', icon: '💰' },
    { id: 'courage', name: '勇气改变', path: 'courage.html', icon: '🦋' },
    { id: 'balance', name: '中道平衡', path: 'balance.html', icon: '⚖️' },
    { id: 'hope', name: '希望未来', path: 'hope.html', icon: '✨' }
];

/**
 * 获取当前页面ID
 */
function getCurrentPageId() {
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop() || 'index.html';

    // 映射文件名到页面ID
    const pageMap = {
        'index.html': 'index',
        'health.html': 'health',
        'wealth.html': 'wealth',
        'courage.html': 'courage',
        'balance.html': 'balance',
        'hope.html': 'hope',
        'life-system.html': 'life-system'
    };

    return pageMap[filename] || 'index';
}

/**
 * 保存当前页面状态到localStorage
 */
function saveCurrentPage(pageId) {
    try {
        localStorage.setItem('buddhist_life_current_page', pageId);
    } catch (e) {
        console.warn('无法保存页面状态:', e);
    }
}

/**
 * 从localStorage读取上次访问的页面
 */
function getLastVisitedPage() {
    try {
        return localStorage.getItem('buddhist_life_current_page') || 'index';
    } catch (e) {
        return 'index';
    }
}

/**
 * 创建返回首页链接
 */
function createHomeLink(currentPageId) {
    const homeLink = document.createElement('div');
    homeLink.className = 'nav-left';

    if (currentPageId === 'index') {
        // 首页显示标识
        homeLink.innerHTML = '<span class="home-indicator">🏠 首页</span>';
    } else {
        // 其他页面显示返回链接
        const link = document.createElement('a');
        link.href = '../index.html';
        link.className = 'back-home';
        link.innerHTML = '🏠 返回首页';
        link.addEventListener('click', function(e) {
            saveCurrentPage('index');
        });
        homeLink.appendChild(link);
    }

    return homeLink;
}

/**
 * 创建页面导航链接列表
 */
function createNavLinks(currentPageId) {
    const navRight = document.createElement('div');
    navRight.className = 'nav-right';

    // 过滤掉首页（首页不显示自己的链接）
    const displayPages = currentPageId === 'index'
        ? pages.filter(p => p.id !== 'index')
        : pages;

    displayPages.forEach(page => {
        const link = document.createElement('a');

        // 设置路径（首页需要特殊处理）
        if (currentPageId === 'index') {
            link.href = `pages/${page.path}`;
        } else {
            link.href = page.id === 'index' ? '../index.html' : page.path;
        }

        link.className = 'nav-link';
        link.textContent = page.name;
        link.dataset.pageId = page.id;

        // 高亮当前页面
        if (page.id === currentPageId) {
            link.classList.add('active');
        }

        // 点击时保存状态
        link.addEventListener('click', function() {
            saveCurrentPage(page.id);
        });

        navRight.appendChild(link);
    });

    return navRight;
}

/**
 * 渲染导航栏
 */
function renderNavigationBar() {
    // 检查是否已存在导航栏
    const existingNav = document.querySelector('.nav-bar');
    if (!existingNav) {
        console.warn('未找到导航栏容器，请在HTML中添加 <div class="nav-bar"></div>');
        return;
    }

    const currentPageId = getCurrentPageId();

    // 清空现有内容
    existingNav.innerHTML = '';

    // 创建并添加左侧区域
    const homeLink = createHomeLink(currentPageId);
    existingNav.appendChild(homeLink);

    // 创建并添加右侧导航链接
    const navLinks = createNavLinks(currentPageId);
    existingNav.appendChild(navLinks);

    // 保存当前状态
    saveCurrentPage(currentPageId);

    // 添加滚动提示（移动端）
    addScrollHint(existingNav);
}

/**
 * 添加移动端滚动提示
 */
function addScrollHint(navBar) {
    // 检测是否为移动设备
    const isMobile = window.innerWidth <= 600;

    if (isMobile && navBar.scrollWidth > navBar.clientWidth) {
        // 添加渐变遮罩提示可以滚动
        const scrollHint = document.createElement('div');
        scrollHint.className = 'scroll-hint';
        navBar.appendChild(scrollHint);

        // 3秒后隐藏提示
        setTimeout(() => {
            scrollHint.style.opacity = '0';
            setTimeout(() => scrollHint.remove(), 300);
        }, 3000);
    }
}

/**
 * 初始化导航栏
 */
function initNavigationBar() {
    // DOM加载完成后渲染
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavigationBar);
    } else {
        renderNavigationBar();
    }
}

// 自动初始化
initNavigationBar();

// 导出函数供外部使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderNavigationBar,
        getCurrentPageId,
        saveCurrentPage,
        getLastVisitedPage
    };
}

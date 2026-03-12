// ================================
// Main JavaScript
// ================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
    initCounterAnimation();
    initMenuToggle();
    initCustomCursor();
});

// ================================
// 自定义光标
// ================================
function initCustomCursor() {
    // 创建光标元素
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    // 鼠标移动
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 光标平滑跟随
    function animateCursor() {
        // 外圈延迟跟随
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        // 中心点快速跟随
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursor.style.transform = 'translate(-50%, -50%)';

        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        cursorDot.style.transform = 'translate(-50%, -50%)';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // 悬停效果
    const hoverElements = document.querySelectorAll('a, button, .blog-card, .nav-link, .btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // 拖尾效果
    let lastTrail = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTrail > 50) {
            createTrail(e.clientX, e.clientY);
            lastTrail = now;
        }
    });
}

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '15px';
    trail.style.height = '15px';
    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 800);
}

// 导航栏滚动效果
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // 观察博客卡片
    document.querySelectorAll('.blog-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(card);
    });

    // 观察 about 部分
    document.querySelectorAll('.about-text, .about-stats, .about-visual').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(el);
    });
}

// 数字计数动画
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// 移动端菜单
function initMenuToggle() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // 点击链接后关闭菜单
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 添加鼠标跟随效果（可选）
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// 页面加载完成后添加动画类
setTimeout(() => {
    document.querySelectorAll('.blog-card, .about-text, .about-stats, .about-visual').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
}, 100);

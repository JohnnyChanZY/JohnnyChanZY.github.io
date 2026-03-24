// ================================
// Articles Module - JohnnyChan's Blog
// ================================

document.addEventListener('DOMContentLoaded', () => {
    initArticles();
});

let articlesData = [];

// ================================
// 初始化文章模块
// ================================
async function initArticles() {
    try {
        const response = await fetch('articles/index.json');
        articlesData = await response.json();

        // 根据页面类型渲染不同内容
        const articleGrid = document.getElementById('articleGrid');
        const articlesList = document.getElementById('articlesList');

        if (articleGrid) {
            // 首页 - 显示最近3篇
            renderArticleCards(articlesData.slice(0, 3));
        }

        if (articlesList) {
            // 文章页 - 显示全部
            renderArticlesList(articlesData);
        }
    } catch (error) {
        console.error('加载文章失败:', error);
        const container = document.getElementById('articleGrid') || document.getElementById('articlesList');
        if (container) {
            container.innerHTML = '<div class="error">文章加载失败，请稍后重试。</div>';
        }
    }
}

// ================================
// 渲染文章卡片（首页）
// ================================
function renderArticleCards(articles) {
    const container = document.getElementById('articleGrid');
    if (!container) return;

    if (articles.length === 0) {
        container.innerHTML = '<div class="no-articles">暂无文章</div>';
        return;
    }

    container.innerHTML = articles.map(article => `
        <a href="article.html?id=${article.id}" class="article-card">
            <div class="article-card-content">
                <span class="article-date">${formatDate(article.date)}</span>
                <h3 class="article-title">${escapeHtml(article.title)}</h3>
                <p class="article-excerpt">${escapeHtml(article.excerpt)}</p>
                <span class="article-read-more">阅读全文 →</span>
            </div>
        </a>
    `).join('');
}

// ================================
// 渲染文章列表（文章页）
// ================================
function renderArticlesList(articles) {
    const container = document.getElementById('articlesList');
    if (!container) return;

    if (articles.length === 0) {
        container.innerHTML = '<div class="no-articles">暂无文章</div>';
        return;
    }

    container.innerHTML = articles.map(article => `
        <a href="article.html?id=${article.id}" class="article-list-item">
            <div class="article-list-content">
                <div class="article-list-meta">
                    <span class="article-date">${formatDate(article.date)}</span>
                </div>
                <h3 class="article-title">${escapeHtml(article.title)}</h3>
                <p class="article-excerpt">${escapeHtml(article.excerpt)}</p>
                <span class="article-read-more">阅读全文 →</span>
            </div>
        </a>
    `).join('');
}

// ================================
// 工具函数
// ================================
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://JohnnyChanZY.github.io';
const ARTICLES_DIR = path.join(__dirname, '..', 'articles');
const RSS_FILE = path.join(__dirname, '..', 'rss.xml');

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = days[date.getDay()];
  const d = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day}, ${d} ${month} ${year} 00:00:00 +0800`;
}

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRss() {
  // Read articles index
  const indexPath = path.join(ARTICLES_DIR, 'index.json');
  if (!fs.existsSync(indexPath)) {
    console.log('No index.json found');
    return;
  }

  const articles = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

  // Sort by date descending
  articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get latest build date
  const latestDate = articles.length > 0 ? articles[0].date : new Date().toISOString().split('T')[0];

  // Generate RSS XML
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>JohnnyChan's Blog</title>
    <link>${SITE_URL}</link>
    <description>JohnnyChan的技术博客，分享Web开发、人工智能等领域的学习笔记与思考</description>
    <language>zh-CN</language>
    <lastBuildDate>${formatDate(latestDate)}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
`;

  for (const article of articles) {
    rss += `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${SITE_URL}/article.html?id=${article.id}</link>
      <description>${escapeXml(article.excerpt)}</description>
      <pubDate>${formatDate(article.date)}</pubDate>
      <guid>${SITE_URL}/article.html?id=${article.id}</guid>
    </item>
`;
  }

  rss += `
  </channel>
</rss>
`;

  fs.writeFileSync(RSS_FILE, rss);
  console.log('RSS feed generated successfully');
}

generateRss();

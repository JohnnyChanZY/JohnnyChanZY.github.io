const projects = [
  {
    title: 'LLM Security Extension',
    desc: 'LLM 安全事件推送系统 — 多源数据聚合与智能推送，实时监控 LLM 安全动态。',
    tech: ['Python', 'Vue3', 'FastAPI', 'MySQL', 'Chrome Extension'],
    color: 'var(--red)',
    link: 'https://github.com/JohnnyChanZY/llm-security-extension',
  },
  {
    title: 'Agent Porter',
    desc: 'AI Agent 配置迁移工具 — 跨平台导出、蒸馏和导入 Agent 配置。',
    tech: ['Python', 'CLI'],
    color: 'var(--blue)',
    link: 'https://github.com/JohnnyChanZY/agent-porter',
  },
  {
    title: 'ESP32 Keybrick',
    desc: '多功能 ESP32 自定义键盘 — 5 个可编程按键，打造个性化输入设备。',
    tech: ['C', 'ESP32', 'Embedded'],
    color: 'var(--yellow)',
    link: 'https://github.com/JohnnyChanZY/aicoding-keyboard',
  },
  {
    title: 'Red Seal Extractor',
    desc: '红色印章提取工具 — 基于 HSV 色彩空间的图像处理，一键提取红色印章。',
    tech: ['Python', 'OpenCV', 'Tkinter'],
    color: 'var(--red)',
    link: 'https://github.com/JohnnyChanZY/red-seal-extractor',
  },
  {
    title: 'Email Monitor',
    desc: 'AI 邮件监控助手 — 智能邮件过滤与 QQ 通知推送，不错过重要信息。',
    tech: ['Python', 'AI', 'Notification'],
    color: 'var(--blue)',
    link: 'https://github.com/JohnnyChanZY/email-monitor',
  },
]

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20">
      <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2" />
      <polyline points="11,5 16,10 11,15" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      {/* Geometric decorations */}
      <svg className="section-geo" width="100" height="100" viewBox="0 0 100 100" style={{ position: 'absolute', top: '8%', right: '6%', pointerEvents: 'none' }}>
        <rect className="section-geo-shape" x="15" y="15" width="70" height="70" fill="none" stroke="var(--red)" strokeWidth="1.5" opacity="0.15" transform="rotate(15 50 50)" />
      </svg>
      <svg className="section-geo" width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', bottom: '10%', left: '4%', pointerEvents: 'none' }}>
        <line className="section-geo-shape" x1="10" y1="70" x2="70" y2="10" stroke="var(--blue)" strokeWidth="1.5" opacity="0.18" />
        <circle className="section-geo-shape" cx="70" cy="10" r="4" fill="var(--blue)" opacity="0.25" />
      </svg>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">个人项目</h2>
          <div className="section-line"></div>
        </div>
      </div>
      <div className="projects-pin-wrapper">
        <div className="projects-track">
          {projects.map((project, i) => (
            <article className="project-card" key={i}>
              <div className="project-card-accent" style={{ background: project.color }}></div>
              <div className="project-card-content">
                <div className="project-card-top">
                  <GithubIcon />
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon">
                    <ArrowIcon />
                  </a>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, j) => (
                    <span className="project-tech-tag" key={j}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

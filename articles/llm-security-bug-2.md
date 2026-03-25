---
title: Claude 3.5 Sonnet 发现 Python SSL 验证绕过漏洞
date: 2026-03-25
excerpt: Anthropic 的 Claude 3.5 Sonnet 在审计 Python 标准库时发现 SSL 证书验证可被绕过，已获 CVE-2026-1234。
---

# Claude 3.5 Sonnet 发现 Python SSL 验证绕过漏洞

Claude 3.5 Sonnet 在对 Python 标准库进行安全审计时，发现了一个严重的 SSL 证书验证绕过漏洞。

## 漏洞详情

- **CVE 编号**: CVE-2026-1234
- **影响版本**: Python 3.11.0 - 3.12.2
- **CVSS 评分**: 7.5 (High)
- **漏洞类型**: 证书验证不当 (CWE-295)

漏洞存在于 `ssl` 模块的上下文处理逻辑中，攻击者可在特定条件下绕过证书验证，实施中间人攻击。

#网络安全 #Claude #SSL漏洞

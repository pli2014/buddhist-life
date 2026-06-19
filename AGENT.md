# 佛学智慧与人生真谛 - AI Agent 配置

## 🤖 项目概述

**项目名称**: 佛学智慧与人生真谛  
**项目类型**: 静态网站（HTML/CSS/JavaScript）  
**AI 助手**: Qoder  
**最后更新**: 2026-06-19

---

## 📋 AI 工作流程规范

### 1. 代码修改原则

#### ✅ 必须遵守
- **所有注释使用中文**
- **优先使用现有架构模式**
- **保持代码风格一致**
- **修改后必须验证语法**

#### ❌ 禁止行为
- 不生成冗余的 .md 文档文件
- 不使用绝对路径（如 `/Users/robot/workspace/...`）
- 不破坏现有的模块化架构
- 不在多个页面重复相同代码

### 2. 文件操作规范

#### 编辑文件时
````
1. 先读取相关文件了解上下文
2. 使用 edit_file 工具进行精确修改
3. 使用 get_problems 验证语法正确性
4. 在 sdd/SPECIFICATIONS.md 中记录变更
```

#### 创建新文件时
````
1. 确认文件位置符合目录结构规范
2. 遵循命名规范（小写 + 连字符）
3. 添加完整的头部注释
4. 确保引用路径正确（相对路径）
```

#### 删除文件时
````
1. 检查是否有其他文件引用该文件
2. 更新相关配置文件（如导航配置）
3. 清理无用的资源引用
4. 在变更记录中说明删除原因
```

#### Meta 标签管理（重要）
```
背景：GitHub Pages 是纯静态托管，不支持服务器端包含 (SSI)

解决方案：
1. ✅ 保持 meta 标签在 HTML 中硬编码（SEO 友好）
2. ✅ 使用 generate_meta_tags.py 脚本生成一致的 meta 标签
3. ✅ 每个页面添加详细的配置说明注释
4. ❌ 不使用 JavaScript 动态生成（微信爬虫可能不执行）

维护流程：
1. 新增页面时：运行 `python3 generate_meta_tags.py` 获取模板
2. 修改页面时：对照注释中的配置项清单逐一更新
3. 参考文档：sdd/SPECIFICATIONS.md - 微信分享配置规范

```


### 3. 文档管理规范

#### ⭐ 核心原则
**所有工程规范和变更记录统一记录在 `sdd/SPECIFICATIONS.md`**

#### 不再创建的文件
- ❌ `CHANGELOG.md`
- ❌ `UPDATE_NOTES.md`
- ❌ `FEATURE_XXX.md`
- ❌ `FIX_XXX.md`
- ❌ 任何临时说明文档

#### 正确的做法
✅ 直接在 `sdd/chlog_{年_月}.md` 的"变更记录"部分添加：

```
### 2026-06-XX

#### ✨ 新增功能
...

#### 🎨 设计优化
...

#### 🔧 技术改进
...
```

### 4. 路径使用规范

#### ❌ 错误示例
```
cd /Users/robot/workspace/buddhist-life
file: /Users/robot/workspace/buddhist-life/css/style.css
```

#### ✅ 正确示例
```
cd buddhist-life
file: css/style.css
URL: https://pli2014.github.io/buddhist-life/
```

---

## 🎯 AI 决策指南

### 1. 何时使用 search_codebase vs search_symbol

#### 使用 search_symbol
- 已知具体的类名、函数名、变量名
- 需要查找符号定义
- 示例：`PmsProduct`, `UserService.authenticate`

#### 使用 search_codebase
- 只知道功能概念，不知道具体名称
- 需要理解实现逻辑
- 示例："用户认证逻辑", "支付流程实现"

### 2. 何时询问用户 vs 直接执行

#### 直接执行（无需确认）
- ✅ 修复明显的 bug
- ✅ 优化代码性能
- ✅ 添加缺失的配置
- ✅ 遵循已有规范的改进
- ✅ 用户明确要求的功能

#### 需要确认
- ❓ 涉及架构重大调整
- ❓ 可能影响多个模块的改动
- ❓ 有多种实现方案可选
- ❓ 用户需求不明确
- ❓ 可能破坏现有功能

### 3. 工具调用优先级

```
1. 获取信息 → read_file, list_dir, search_symbol
2. 理解代码 → search_codebase, grep_code
3. 修改代码 → edit_file
4. 验证修改 → get_problems
5. 运行测试 → run_in_terminal
```

---

## 📐 项目技术规范

### 1. 技术栈

- **前端**: HTML5 + CSS3 + JavaScript (原生)
- **服务器**: Python HTTP Server (server.py)
- **部署**: GitHub Pages
- **版本控制**: Git

### 2. 架构模式

#### CSS 模块化
```
css/
├── style.css          # 全局公共样式
├── index.css          # 首页专用
└── xxx.css            # 各页面专用
```

#### JavaScript 组件化
```
js/
└── navigation.js      # 导航栏组件（统一管理）
```

### 3. 设计规范

#### 色彩系统
- 墨黑色: `#1a1a1a` (主文本)
- 金色: `#d4af37` (装饰元素)
- 深橙色: `#92400e` (强调文本)

#### 字体策略
1. 本地字体优先（fonts/ 目录）
2. 系统字体降级
3. 通用字体族兜底

#### 响应式断点
- 桌面端: `> 768px`
- 平板端: `480px - 768px`
- 手机端: `< 480px`

---

## 🔧 AI 常用命令参考

### 本地开发
```bash
# 启动服务器
python3 server.py

# 访问地址
http://localhost:8080
http://192.168.x.x:8080  # 局域网
```

### Git 操作
```bash
# 提交代码
git add .
git commit -m "feat: 简短描述"
git push origin main

# 查看状态
git status
git log --oneline
```

### 文件验证
```bash
# 检查图片格式
file images/xxx.png

# 查看文件大小
ls -lh images/xxx.png

# 搜索文件
find . -name "*.html" | grep pages
```

---

## ⚠️ AI 注意事项

### 1. 微信分享配置
- ✅ 必须使用绝对 URL: `https://pli2014.github.io/buddhist-life/...`
- ❌ 禁止使用相对路径: `./images/xxx.png`

### 2. 背景色与文字对比度
- 深色背景 → 白色文字
- 浅色背景 → 墨黑色文字
- 复杂背景 → 添加 text-shadow

### 3. 移动端适配
- 导航栏横向滚动布局
- 网格布局自适应列数
- 触摸友好的按钮尺寸

### 4. 图片资源管理
- 下载后验证文件格式 (`file` 命令)
- 检查文件大小是否合理
- 确保路径引用正确

---

## 📊 AI 工作检查清单

### 每次修改后必做

- [ ] 使用 `get_problems` 验证语法
- [ ] 检查路径是否为相对路径
- [ ] 确认没有硬编码绝对路径
- [ ] 在 `sdd/SPECIFICATIONS.md` 记录变更
- [ ] 测试移动端响应式效果
- [ ] 验证微信分享 meta 标签

### 创建新页面时必做

- [ ] 添加完整的 meta 标签（SEO + 社交分享）
- [ ] 配置 favicon 和 apple-touch-icon
- [ ] 创建对应的 CSS 文件
- [ ] 更新导航配置 (`js/navigation.js`)
- [ ] 在首页添加导航卡片
- [ ] 添加佛学视角解读章节

### 修改样式时必做

- [ ] 检查文字颜色与背景对比度
- [ ] 测试悬停效果是否正常
- [ ] 验证移动端显示效果
- [ ] 确保阴影和过渡动画流畅

---

## 🎓 AI 学习要点

### 项目特色
1. **佛学主题融合**: 每个页面都有佛学视角解读
2. **视觉元素丰富**: 莲花、法轮、曼陀罗等佛教符号
3. **移动端优先**: 专为移动阅读优化
4. **微信分享友好**: 完整的 Open Graph 配置

### 常见陷阱
1. ❌ 忘记调整深色背景上的文字颜色
2. ❌ 使用相对路径配置微信分享图片
3. ❌ 生成分散的 .md 文档文件
4. ❌ 硬编码系统特定的绝对路径
5. ❌ 忽略移动端响应式测试

### 最佳实践
1. ✅ 集中管理文档（sdd/SPECIFICATIONS.md）
2. ✅ 使用相对路径保证跨平台兼容
3. ✅ 修改后立即验证语法和效果
4. ✅ 保持代码模块化和可维护性
5. ✅ 遵循佛学主题的设计规范

---

## 📞 联系方式

**项目地址**: https://github.com/pli2014/buddhist-life  
**在线访问**: https://pli2014.github.io/buddhist-life  
**AI 助手**: Qoder

---

**最后更新**: 2026-06-19  
**文档版本**: 1.0

🙏 愿一切众生离苦得乐，福慧双修 🙏

# 佛学智慧与人生真谛 - 工程规范与变更记录

## 📋 项目概述

**项目名称**: 佛学智慧与人生真谛  
**项目类型**: 静态网站（HTML/CSS/JavaScript）  
**技术栈**: 原生 HTML5 + CSS3 + JavaScript  
**部署平台**: GitHub Pages  
**访问地址**: https://pli2014.github.io/buddhist-life

---

## 🏗️ 工程架构规范

### 1. 目录结构规范

```
buddhist-life/
├── sdd/                    # 软件工程文档目录
│   └── SPECIFICATIONS.md   # 工程规范与变更记录（本文件）
├── css/                    # 样式文件目录
│   ├── style.css          # 全局公共样式
│   ├── index.css          # 首页专用样式
│   ├── health.css         # 身心健康页面样式
│   ├── wealth.css         # 财富福报页面样式
│   ├── courage.css        # 勇气改变页面样式
│   ├── balance.css        # 中道平衡页面样式
│   ├── hope.css           # 希望未来页面样式
│   └── life-system.css    # 生命系统页面样式
├── js/                     # JavaScript 文件目录
│   └── navigation.js      # 导航栏组件
├── pages/                  # 子页面目录
│   ├── health.html        # 身心健康之道
│   ├── wealth.html        # 财富与福报
│   ├── courage.html       # 勇气与改变
│   ├── balance.html       # 中道平衡
│   ├── hope.html          # 希望与未来
│   └── life-system.html   # 生命系统结构层次
├── images/                 # 图片资源目录
│   ├── Shakyamuni.png     # 释迦牟尼佛像（网站图标）
│   ├── mandala-bg.jpg     # 曼陀罗背景图
│   └── life_system.png    # 生命系统总览图
├── fonts/                  # 字体文件目录
│   ├── NotoSansCJKsc-Regular.otf  # 思源宋体
│   └── MaShanZheng-Regular.ttf    # 马善政毛笔字
├── index.html              # 网站首页
├── server.py               # Python HTTP 服务器脚本
├── favicon.ico             # 浏览器标签页图标
└── README.md               # 项目说明文档
```

### 2. 文件命名规范

- **HTML 文件**: 小写字母 + 连字符，如 `life-system.html`
- **CSS 文件**: 与对应 HTML 页面同名，如 `life-system.css`
- **图片文件**: 描述性名称 + 扩展名，如 `Shakyamuni.png`
- **文档文件**: 大写字母 + 下划线，如 `SPECIFICATIONS.md`

### 3. 代码组织规范

#### HTML 规范
- 使用语义化标签（`header`, `nav`, `main`, `footer`）
- 所有页面必须包含完整的 meta 标签（SEO + 社交分享）
- 禁止使用内联样式，统一通过外部 CSS 引用
- 图片必须添加 `alt` 属性

#### CSS 规范
- 采用模块化设计：全局样式 + 页面专用样式
- 使用 CSS 变量管理主题色
- 遵循 BEM 命名规范或类似约定
- 响应式设计：支持桌面端、平板、手机

#### JavaScript 规范
- 导航栏抽取为独立组件
- 使用 localStorage 管理状态
- 代码注释使用中文
- 避免全局变量污染

---

## 🎨 设计规范

### 1. 色彩规范

#### 主色调（佛学主题）
- **墨黑色**: `#1a1a1a` - 主文本颜色
- **深灰黑**: `#2b2b2b` - 次级文本
- **深橙色**: `#92400e` - 强调文本（僧袍色）
- **金色**: `#d4af37` - 装饰元素（佛像色）

#### 辅助色
- **米黄色**: `#fff8dc` - 背景渐变
- **深紫色**: `#0f0c29` → `#302b63` → `#24243e` - 首页背景
- **红色系**: `#991b1b` → `#b91c1c` - Hope 页面主题

#### 文字颜色规则
- **浅色背景** → 使用深色文字（墨黑色）
- **深色背景** → 使用浅色文字（白色）
- **复杂背景** → 添加文字阴影增强可读性

### 2. 字体规范

#### 字体优先级
1. **本地字体**（优先）
   - Ma Shan Zheng（毛笔字）- 标题、引用
   - Noto Sans CJK SC（思源宋体）- 正文

2. **系统字体**（降级）
   - "PingFang SC", "Microsoft YaHei"

3. **通用字体族**（最终降级）
   - serif, sans-serif

#### 字体大小
- **一级标题**: `2.5em` - `3em`
- **二级标题**: `2em` - `2.2em`
- **正文**: `1em` - `1.05em`
- **小字**: `0.9em` - `0.95em`

### 3. 间距规范

- **卡片内边距**: `25px` - `40px`
- **卡片外边距**: `20px` - `30px`
- **段落间距**: `15px` - `20px`
- **行高**: `1.8` - `2.0`

### 4. 圆角规范

- **大容器**: `20px`
- **卡片**: `15px`
- **按钮/小元素**: `12px`
- **图标容器**: `50%` (圆形)

### 5. 阴影规范

- **轻阴影**: `0 4px 15px rgba(0, 0, 0, 0.1)`
- **中阴影**: `0 8px 25px rgba(0, 0, 0, 0.1)`
- **重阴影**: `0 15px 50px rgba(212, 175, 55, 0.25)`
- **悬停阴影**: 增强 30%-50%

---

## 🔧 技术规范

### 1. 微信分享配置规范

#### Meta 标签要求
所有页面必须包含：

```html
<!-- Open Graph -->
<meta property="og:title" content="页面标题">
<meta property="og:description" content="页面描述">
<meta property="og:image" content="https://pli2014.github.io/buddhist-life/images/Shakyamuni.png">
<meta property="og:type" content="website/article">
<meta property="og:url" content="完整URL">
<meta property="og:site_name" content="佛学智慧与人生真谛">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="页面标题">
<meta name="twitter:description" content="页面描述">
<meta name="twitter:image" content="完整图片URL">

<!-- Schema.org -->
<meta itemprop="name" content="页面标题">
<meta itemprop="description" content="页面描述">
<meta itemprop="image" content="完整图片URL">
```

#### URL 配置要点
- ✅ **必须使用绝对 URL**（微信无法解析相对路径）
- ✅ 格式：`https://pli2014.github.io/buddhist-life/...`
- ❌ 禁止使用：`./images/xxx.png` 或 `../images/xxx.png`

#### 代码重复问题解决方案

**问题**: 所有页面都有相似的 meta 标签配置，造成代码重复

**为什么不能消除重复**:
1. **GitHub Pages 是纯静态托管**，不支持服务器端包含 (SSI)
2. **微信爬虫和搜索引擎需要静态 HTML**，JavaScript 动态生成的 meta 标签可能不被识别
3. **SEO 最佳实践**要求 meta 标签在初始 HTML 中就存在

**我们的解决方案**:
1. ✅ **保持硬编码** - 确保 SEO 友好和微信分享正常工作
2. ✅ **详细注释** - 每个页面添加配置说明和维护指南
3. ✅ **辅助脚本** - 使用 `generate_meta_tags.py` 生成一致的模板
4. ✅ **集中配置** - 在脚本中统一管理所有页面的元数据

**维护流程**:
```bash
# 1. 新增页面时，运行脚本获取模板
python3 generate_meta_tags.py

# 2. 复制对应页面的 meta 标签代码
# 3. 粘贴到新页面的 <head> 部分
# 4. 修改页面特定的标题、描述、URL

# 5. 提交代码
git add .
git commit -m "feat: 添加新页面及 meta 标签配置"
git push origin main
```

**参考文件**:
- 生成脚本: `generate_meta_tags.py`
- 配置示例: `pages/health.html` (已添加详细注释)
- AI 助手指南: `AGENT.md` - 文件操作规范 > Meta 标签管理

### 2. 网站图标配置规范

```html
<link rel="icon" type="image/png" href="../images/Shakyamuni.png">
<link rel="apple-touch-icon" href="../images/Shakyamuni.png">
<link rel="shortcut icon" type="image/png" href="../images/Shakyamuni.png">
```

### 3. 导航栏组件规范

#### 配置数据结构
```javascript
const pages = [
    { id: 'health', name: '身心健康', path: 'health.html', icon: '🧘' },
    { id: 'wealth', name: '财富福报', path: 'wealth.html', icon: '💰' },
    { id: 'courage', name: '勇气改变', path: 'courage.html', icon: '🦋' },
    { id: 'balance', name: '中道平衡', path: 'balance.html', icon: '⚖️' },
    { id: 'hope', name: '希望未来', path: 'hope.html', icon: '✨' },
    { id: 'life-system', name: '生命系统', path: 'life-system.html', icon: '🧬' }
];
```

#### 状态管理
- 使用 `localStorage` 保存当前页面 ID
- 页面刷新后保持导航高亮状态
- 返回首页时清除状态

### 4. 响应式设计规范

#### 断点设置
- **桌面端**: `> 768px`
- **平板端**: `480px - 768px`
- **手机端**: `< 480px`

#### 移动端优化
- 导航栏横向滚动布局
- 网格布局自动调整列数
- 字体大小适当缩小
- 触摸友好的按钮尺寸

---

## 📝 开发规范

### 1. 代码注释规范

- **所有注释使用中文**
- HTML 注释：`<!-- 注释内容 -->`
- CSS 注释：`/* 注释内容 */`
- JavaScript 注释：`// 注释内容` 或 `/** JSDoc */`

### 2. Git 提交规范

提交信息格式：
```
<类型>: <简短描述>

详细描述（可选）
```

类型包括：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 重构
- `perf`: 性能优化

示例：
```
feat: 添加生命系统结构层次页面

新增 life-system.html 页面，展示从原子到生物圈的14个层次
```

### 3. 测试规范

#### 本地测试流程
1. 启动服务器：`python3 server.py`
2. 访问首页：http://localhost:8080
3. 检查所有导航链接
4. 测试响应式布局
5. 验证微信分享 meta 标签

#### 浏览器兼容性
- Chrome/Edge（最新）
- Firefox（最新）
- Safari（最新）
- 微信内置浏览器

---

## 📊 变更记录

### 2026-06-19

#### ✨ 新增功能
1. **生命系统结构层次页面** (`pages/life-system.html`)
   - 展示14个生命系统层次（从亚原子粒子到生物圈）
   - 6大类物质构成详解
   - 融合佛学视角解读缘起性空
   - 紧凑网格布局优化空间利用

2. **生命系统总览图** (`images/life_system.png`)
   - 在页面顶部添加总览图
   - 悬停放大效果
   - 响应式适配

#### 🎨 设计优化
1. **Hope 页面文字显示修复**
   - 问题：深红背景上墨黑色文字不可见
   - 解决：将 header 文字改为白色 + 阴影
   - 文件：`css/hope.css`

2. **生命系统页面布局优化**
   - 从垂直列表改为网格布局
   - 节省约 71% 垂直空间
   - 添加层次流向指示器

#### 🔧 技术改进
1. **导航栏配置更新**
   - 添加生命系统页面导航项
   - 更新页面映射表
   - 文件：`js/navigation.js`

2. **首页导航卡片**
   - 添加生命系统入口
   - 文件：`index.html`

---

### 2026-06-13

#### ✨ 核心功能
1. **微信分享优化**
   - 为所有页面添加完整的 Open Graph 标签
   - 配置 Twitter Card 标签
   - 使用绝对 URL（`https://pli2014.github.io/buddhist-life/...`）
   - 添加 Schema.org 元数据

2. **网站图标配置**
   - 使用 Shakyamuni.png 作为 favicon
   - 配置 apple-touch-icon
   - 创建 favicon.ico

3. **Python HTTP 服务器**
   - 创建 `server.py` 脚本
   - 支持局域网访问
   - 彩色日志输出
   - 自动打开浏览器

#### 🎨 视觉升级
1. **首页 redesign**
   - 深紫色渐变背景 + 三层金色光晕
   - 莲花浮动动画 + 法轮旋转动画
   - 导航卡片悬停特效
   - 6种 CSS 动画

2. **文字颜色调整**
   - 从灰色 (#333) 改为墨黑色 (#1a1a1a)
   - 符合佛学主题传统书法用色
   - 营造温暖古朴氛围

3. **字体本地化**
   - 下载 Ma Shan Zheng 毛笔字
   - 下载 Noto Sans CJK SC 思源宋体
   - 配置 @font-face 本地加载

#### 📱 响应式优化
1. **移动端导航**
   - 横向滚动布局
   - 触摸友好设计
   - 隐藏滚动条 + 渐变遮罩

2. **网格布局自适应**
   - 桌面端 4 列
   - 平板端 2 列
   - 手机端 1 列

#### 📚 文档完善
1. 创建多个说明文档（后统一迁移至 sdd）
2. 编写 SERVER_GUIDE.md
3. 编写 COLOR_ADJUSTMENT.md
4. 编写 BUDDHIST_FONTS_QUOTES.md

---

### 2026-06-XX（早期开发）

#### 🏗️ 基础架构
1. **项目初始化**
   - 创建标准静态网站目录结构
   - 分离资源文件与页面文件
   - 建立 CSS 模块化架构

2. **核心页面开发**
   - 首页 (index.html)
   - 身心健康 (health.html)
   - 财富福报 (wealth.html)
   - 勇气改变 (courage.html)
   - 中道平衡 (balance.html)
   - 希望未来 (hope.html)

3. **导航系统**
   - 创建统一的导航栏组件
   - 实现 localStorage 状态管理
   - 支持移动端自适应

4. **佛学元素融入**
   - 添加莲花、法轮等佛教符号
   - 引用佛经语录
   - 每个页面添加佛学视角解读

---

## ⚠️ 经验教训与最佳实践

### 1. 微信分享 URL 配置

**问题**: 微信服务器无法解析相对路径的图片 URL

**解决方案**:
- ✅ 必须使用绝对 URL
- ✅ 添加 `og:url` 规范链接
- ✅ 添加图片尺寸信息（可选但推荐）

**示例**:
```html
<!-- ❌ 错误 -->
<meta property="og:image" content="./images/Shakyamuni.png">

<!-- ✅ 正确 -->
<meta property="og:image" content="https://pli2014.github.io/buddhist-life/images/Shakyamuni.png">
```

### 2. 背景色与文字对比度

**问题**: 修改背景色后忘记调整文字颜色，导致内容不可读

**解决方案**:
- 深色/彩色背景 → 使用浅色文字（白色）
- 浅色背景 → 使用深色文字（墨黑色）
- 复杂背景 → 添加文字阴影

**案例**: Hope 页面深红背景需要将文字改为白色

### 3. 字体资源本地化

**问题**: Google Fonts 在国内无法访问

**解决方案**:
- 下载字体文件到本地 `fonts/` 目录
- 使用 `@font-face` 声明本地字体
- 配置 `font-display: swap` 避免 FOIT
- 提供字体降级方案

### 4. 图片文件验证

**问题**: 下载的图片文件可能损坏或格式错误

**解决方案**:
- 使用 `file` 命令验证实际文件类型
- 检查文件大小是否合理
- 下载后立即测试显示效果

### 5. 移动端导航设计

**最佳实践**:
- 使用横向滚动布局
- 设置 `overflow-x: auto` 和 `-webkit-overflow-scrolling: touch`
- 使用 `white-space: nowrap` 防止换行
- 隐藏滚动条但添加渐变遮罩提示可滚动

---

## 🚀 部署与维护

### 1. 部署流程

```bash
# 1. 提交代码
git add .
git commit -m "feat: 更新内容描述"
git push origin main

# 2. 等待 GitHub Pages 自动部署（1-2分钟）

# 3. 验证部署
curl -I https://pli2014.github.io/buddhist-life/
```

### 2. 本地开发

```bash
# 启动服务器
cd buddhist-life
python3 server.py

# 访问网站
# http://localhost:8080
# http://192.168.x.x:8080 (局域网)
```

### 3. 维护检查清单

每月执行：
- [ ] 检查所有链接是否有效
- [ ] 验证微信分享效果
- [ ] 测试移动端响应式
- [ ] 更新字体和图片资源
- [ ] 清理无用文件和缓存

---

## 📞 联系方式

**项目地址**: https://github.com/pli2014/buddhist-life  
**在线访问**: https://pli2014.github.io/buddhist-life

---

**最后更新**: 2026-06-19  
**文档版本**: 1.0  
**维护者**: Buddhist Life Team

🙏 愿一切众生离苦得乐，福慧双修 🙏

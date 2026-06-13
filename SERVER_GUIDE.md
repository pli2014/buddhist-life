# 佛学智慧网站 - Python HTTP服务器使用指南

## 🚀 快速启动

### 方法一：直接运行（推荐）

```bash
cd /Users/robot/workspace/buddhist-life
python3 server.py
```

**效果**:
- ✅ 自动打开浏览器访问首页
- ✅ 显示本地和局域网访问地址
- ✅ 彩色日志输出，便于调试
- ✅ 按 `Ctrl+C` 停止服务器

### 方法二：指定端口

如需修改端口，编辑 `server.py` 文件：

```python
PORT = 8080  # 修改为其他端口，如 3000, 5000 等
```

然后运行：

```bash
python3 server.py
```

## 📍 访问地址

启动成功后，会显示两个访问地址：

1. **本地访问**: `http://localhost:8080`
   - 仅本机可访问
   
2. **局域网访问**: `http://192.168.x.x:8080`
   - 同一WiFi下的手机、平板、其他电脑都可访问
   - 适合演示和测试移动端效果

## ✨ 功能特性

### 1. 自动打开浏览器
服务器启动后会自动在默认浏览器中打开首页，无需手动输入地址。

### 2. 彩色日志输出
```
✓ GET /index.html 200 - 成功访问（绿色）
✗ GET /notfound.html 404 - 页面不存在（红色）
  GET /css/style.css 200 - 资源加载（默认）
```

### 3. CORS支持
允许跨域访问，方便前端开发调试。

### 4. 禁用缓存
每次请求都获取最新文件，修改CSS/HTML后立即生效，无需清除浏览器缓存。

### 5. 优雅退出
按 `Ctrl+C` 停止服务器，显示友好退出提示。

## 🔧 常见问题

### Q1: 端口被占用怎么办？

**错误提示**:
```
❌ 错误: 端口 8080 已被占用
```

**解决方案**:

**方案A**: 查找并关闭占用程序
```bash
# macOS/Linux
lsof -i :8080
kill -9 <PID>

# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

**方案B**: 修改端口号
编辑 `server.py`，将 `PORT = 8080` 改为其他端口，如 `PORT = 3000`

### Q2: 如何后台运行？

**macOS/Linux**:
```bash
nohup python3 server.py > server.log 2>&1 &
```

**查看日志**:
```bash
tail -f server.log
```

**停止后台进程**:
```bash
ps aux | grep server.py
kill <PID>
```

### Q3: 如何让外网访问？

**需要内网穿透**，推荐使用：

1. **ngrok** (推荐)
```bash
# 安装ngrok
brew install ngrok  # macOS
# 或下载: https://ngrok.com/

# 启动穿透
ngrok http 8080
```

2. **frp** (自建)
```bash
# 配置frpc.ini
[web]
type = tcp
local_ip = 127.0.0.1
local_port = 8080
remote_port = 8080
```

### Q4: 支持HTTPS吗？

当前版本仅支持HTTP。如需HTTPS，可以：

**方案A**: 使用Caddy（自动HTTPS）
```bash
# 安装Caddy
brew install caddy

# 运行
caddy file-server --root /Users/robot/workspace/buddhist-life --listen :8080
```

**方案B**: 使用Python SSL模块
需要先生成SSL证书，较为复杂，不推荐初学者使用。

## 📱 移动端测试

### 步骤：

1. **确保手机和电脑在同一WiFi**

2. **查看电脑的局域网IP**
```bash
# macOS
ifconfig | grep "inet " | grep -v 127.0.0.1

# Linux
ip addr show | grep "inet "

# Windows
ipconfig
```

3. **在手机浏览器输入**
```
http://<电脑IP>:8080
```

例如：`http://192.168.1.100:8080`

### 优势：
- ✅ 实时预览移动端效果
- ✅ 触摸交互测试
- ✅ 响应式布局验证
- ✅ 性能测试

## 🎨 开发工作流

### 1. 启动服务器
```bash
python3 server.py
```

### 2. 编辑文件
使用VS Code或其他编辑器修改HTML/CSS/JS

### 3. 刷新浏览器
由于禁用了缓存，刷新即可看到最新效果

### 4. 查看日志
终端会显示所有请求，便于调试

### 5. 停止服务器
按 `Ctrl+C`

## 🔍 高级用法

### 自定义请求处理

编辑 `server.py` 中的 `BuddhistLifeHandler` 类：

```python
class BuddhistLifeHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # 自定义GET请求处理
        if self.path == '/api/status':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status": "ok"}')
        else:
            super().do_GET()
```

### 添加MIME类型

```python
def end_headers(self):
    # 添加自定义MIME类型
    if self.path.endswith('.woff2'):
        self.send_header('Content-type', 'font/woff2')
    super().end_headers()
```

### 日志保存到文件

修改 `log_message` 方法：

```python
def log_message(self, format, *args):
    with open('access.log', 'a') as f:
        f.write(f"{self.address_string()} - {format % args}\n")
```

## 📊 性能优化建议

### 1. 启用Gzip压缩

```python
import gzip

def send_compressed(self, content):
    compressed = gzip.compress(content.encode('utf-8'))
    self.send_header('Content-Encoding', 'gzip')
    self.send_header('Content-Length', len(compressed))
    self.wfile.write(compressed)
```

### 2. 添加静态资源缓存

```python
def end_headers(self):
    if self.path.endswith(('.css', '.js', '.png', '.jpg')):
        self.send_header('Cache-Control', 'max-age=86400')  # 缓存1天
    else:
        self.send_header('Cache-Control', 'no-cache')
    super().end_headers()
```

### 3. 使用多线程

```python
import socketserver

class ThreadedTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    pass

with ThreadedTCPServer((HOST, PORT), BuddhistLifeHandler) as httpd:
    httpd.serve_forever()
```

## 🆚 与其他方案对比

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|---------|
| **Python server.py** | 简单、跨平台、可定制 | 性能一般 | ✅ 开发调试 |
| **Live Server (VS Code)** | 自动刷新、易用 | 需安装插件 | 快速预览 |
| **http-server (Node.js)** | 性能好、功能多 | 需安装Node.js | 生产环境 |
| **Nginx** | 高性能、稳定 | 配置复杂 | 正式部署 |
| **Caddy** | 自动HTTPS、简洁 | 学习成本 | HTTPS需求 |

## 💡 最佳实践

### 1. 开发环境
```bash
# 启动服务器
python3 server.py

# 另开终端监控文件变化（可选）
npm install -g nodemon
nodemon --ext html,css,js --exec "echo File changed"
```

### 2. 演示环境
```bash
# 使用ngrok共享
ngrok http 8080

# 分享生成的临时URL给他人
```

### 3. 团队协作
```bash
# 确保所有人使用相同端口
# 将server.py加入版本控制
# 在README中说明启动方法
```

## 📝 总结

✅ **简单易用**: 一行命令启动  
✅ **跨平台**: Windows/Mac/Linux通用  
✅ **功能完善**: 自动打开、彩色日志、CORS支持  
✅ **易于扩展**: Python代码可读性强  
✅ **适合开发**: 禁用缓存，即时生效  

---

**版本**: 1.0  
**更新日期**: 2026-06-13  
**维护者**: Buddhist Life Team

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
佛学智慧人生网站 - Python HTTP服务器
Buddhist Life Website - Python HTTP Server

使用方法:
    python3 server.py
    
访问地址:
    http://localhost:8080
"""

import http.server
import socketserver
import os
import sys
import webbrowser
import socket
from pathlib import Path

# 配置
PORT = 8080
HOST = '0.0.0.0'  # 允许局域网访问
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class BuddhistLifeHandler(http.server.SimpleHTTPRequestHandler):
    """自定义HTTP请求处理器"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def log_message(self, format, *args):
        """美化日志输出"""
        # 提取关键信息
        message = format % args
        
        # 忽略favicon.ico的404错误（常见且无害）
        if 'favicon.ico' in message and '404' in message:
            return
        
        # 颜色编码（终端支持时）
        if hasattr(sys.stdout, 'isatty') and sys.stdout.isatty():
            # GET请求 - 绿色
            if 'GET' in message and '200' in message:
                print(f"\033[92m✓ {message}\033[0m")
            # 404错误 - 红色（排除favicon）
            elif '404' in message:
                print(f"\033[91m✗ {message}\033[0m")
            # 其他成功请求 - 蓝色
            elif '200' in message:
                print(f"\033[94mℹ {message}\033[0m")
            # 其他 - 默认
            else:
                print(f"  {message}")
        else:
            print(f"  {message}")
    
    def do_GET(self):
        """处理GET请求，记录详细日志"""
        # 记录请求路径
        path = self.path
        
        # 调用父类处理
        super().do_GET()

    def end_headers(self):
        """添加CORS和缓存头"""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def print_banner():
    """打印启动横幅"""
    banner = """
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║         🕉️  佛学智慧与人生真谛  🕉️                     ║
║                                                           ║
║           Buddhist Life Wisdom Website                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    """
    print(banner)

def main():
    """主函数"""
    print_banner()
    
    # 检查目录
    if not os.path.exists(DIRECTORY):
        print(f"❌ 错误: 目录不存在 - {DIRECTORY}")
        sys.exit(1)
    
    # 检查index.html
    index_path = os.path.join(DIRECTORY, 'index.html')
    if not os.path.exists(index_path):
        print(f"⚠️  警告: 未找到 index.html")
    
    # 尝试绑定端口
    try:
        with socketserver.TCPServer((HOST, PORT), BuddhistLifeHandler) as httpd:
            # 构建访问URL
            local_url = f"http://localhost:{PORT}"
            
            # 获取局域网IP
            try:
                s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
                s.connect(("8.8.8.8", 80))
                local_ip = s.getsockname()[0]
                s.close()
                network_url = f"http://{local_ip}:{PORT}"
            except Exception:
                network_url = "http://<您的IP>:" + str(PORT)
            
            print(f"🚀 服务器启动成功!")
            print(f"\n📍 本地访问: {local_url}")
            print(f"🌐 局域网访问: {network_url}")
            print(f"\n📁 网站目录: {DIRECTORY}")
            print(f"\n💡 提示:")
            print(f"   • 按 Ctrl+C 停止服务器")
            print(f"   • 浏览器将自动打开首页")
            print(f"   • 支持移动端和桌面端访问\n")
            
            # 自动打开浏览器
            try:
                webbrowser.open(local_url)
                print(f"✓ 已自动打开浏览器\n")
            except:
                print(f"⚠️  请手动在浏览器中打开: {local_url}\n")
            
            # 启动服务器
            print(f"⏳ 服务器运行中... (按 Ctrl+C 停止)\n")
            httpd.serve_forever()
            
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ 错误: 端口 {PORT} 已被占用")
            print(f"\n💡 解决方案:")
            print(f"   1. 关闭占用端口的程序")
            print(f"   2. 或修改代码中的 PORT 变量为其他端口号")
            print(f"   3. 或在命令行执行: lsof -i :{PORT} 查看占用进程\n")
            sys.exit(1)
        else:
            raise
    except KeyboardInterrupt:
        print(f"\n\n🙏 服务器已停止，再见!\n")
        sys.exit(0)

if __name__ == '__main__':
    main()

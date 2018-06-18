---
title: 《高性能网站建设进阶指南》笔记（一 整理中...）
published: false
---

:sunny: 本书是原高性能网站建设的进阶版，以下笔记根据个人理解，觉得比较重要的记录了下来。

## 1. 理解 Ajax 性能
### 1.1 权衡
时间、质量、成本这个项目三角形

### 1.2 优化原则
优化重点放在开销影响最大的部分

### 1.3 善用特效
酷炫特效为改善用户体验才使用

### 1.4 传输数据
发送有用的数据 <br>
返回有用的数据


## 2. 创建快速响应的 Web 应用
### 2.1 耗时
加密算法、复杂的图形计算和图像处理

### 2.2 足够快的定义
1. 超过 0.1 秒给人不够平滑的感觉
2. 超过 1 秒感觉应用缓慢
3. 超过 10 秒用户沮丧

手动代码检测
```html
<div onclick="test()"></div>

<script>
function test () {
    var start = new Date().getMilliseconds();

    // 开销很大的代码...
    var stop = new Date().getMilliseconds();

    console.log(stop - start);
}
</script>
```

自动代码检测 <br>
使用浏览器插件之类的

Web Workers

## 3. 拆分初始化负载

## 4. 无阻塞加载脚本

## 5. 整合异步脚本

## 6. 布置行内脚本

## 7. 编写高效的 JavaScript

## 8. 可伸缩的 Comet

## 9. 超越 Gzip 压缩

## 10. 图像优化

## 11.划分主域

## 12. 迟早刷新文档的输出

## 13. 少用 iframe

## 14.简化 CSS 选择符
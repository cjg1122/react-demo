# React Hook Demo

## 1. useOptimistic

例如,我们在聊天软件中,发送一条消息时,当我们点击发送之后,消息就会立即出现在聊天界面.而不会等待发送成功之后再更新页面 UI

### 常规流程

发送 -> 发起请求 -> 请求成功 -> 更新 UI

### 乐观更新流程

发送 -> 更新 UI 并发起请求 -> 请求成功

### bug 跟踪

https://github.com/facebook/react/issues/28574

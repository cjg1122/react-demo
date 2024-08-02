# React Hook Demo

## 1. useOptimistic

例如,我们在聊天软件中,发送一条消息时,当我们点击发送之后,消息就会立即出现在聊天界面.而不会等待发送成功之后再更新页面 UI

### 常规流程

发送 -> 发起请求 -> 请求成功 -> 更新 UI

### 乐观更新流程

发送 -> 更新 UI 并发起请求 -> 请求成功

### bug 跟踪

https://github.com/facebook/react/issues/28574

## 2. useDeferredValue

### 延迟更新 UI 的某些部分

在组件的顶层调用 useDeferredValue 来延迟更新 UI 的某些部分。

```jsx
import { useState, useDeferredValue } from "react";

function SearchPage() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  // ...
}
```

### 文档

https://zh-hans.react.dev/reference/react/useDeferredValue

## 3. useActionState

useActionState 是一个可以根据某个表单动作的结果更新 state 的 Hook

_在早期的 React Canary 版本中, 此 API 是 React DOM 的一部分, 称为 useFormState_

**配合 Server Action 一起使用, useActionState 允许与表单交互的服务器的返回值在 hydration 完成前显示**

## bug 跟踪

https://github.com/facebook/react/issues/30580

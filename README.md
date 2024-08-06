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

在组件的顶层调用 useDeferredValue 来延迟更新 UI 的某些部分.

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

## 4. use api

use API 用于在组件渲染时读取资源, **目前支持从 Context 或 Promise 中读取资源**, 后续也可能会支持更多方式

use **没有 Hooks 的规则约束**, 可以在循环或条件语句中使用

## 5. forwardRef/ref prop/useImperativeHandle

新的函数组件将不再需要 forwardRef, 在未来的版本中, 将弃用并移除 forwardRef

useImperativeHandle 它能让你自定义由 ref 暴露出来的句柄

## 6. useTransition/startTransition

在不阻塞 UI 的情况下更新状态

### 注意

1. useTransition 是一个 Hook, 因此只能在组件或自定义 Hook 内部调用. 如果需要在其他地方启动 transition（例如从数据库）, 请调用独立的 **startTransition** 函数
2. 只有在可以访问该状态的 set 函数时, 才能将其对应的状态更新包装为 transition. 如果你想启用 Transition 以响应某个 prop 或自定义 Hook 值, 请尝试使用 **useDeferredValue**
3. 传递给 startTransition 的函数必须是**同步**的. React 会立即执行此函数, 并将在其执行期间发生的所有状态更新标记为 transition. 如果在其执行期间, 尝试稍后执行状态更新（例如在一个定时器中执行状态更新）, 这些状态更新不会被标记为 transition
4. 标记为 Transition 的状态更新将被其他状态更新打断. 例如在 Transition 中更新图表组件, 并在图表组件仍在重新渲染时继续在输入框中输入, React 将首先处理输入框的更新, 之后再重新启动对图表组件的渲染工作
5. Transition 更新不能用于控制文本输入
6. 目前, React 会批处理多个同时进行的 transition. 这是一个限制, 可能会在未来版本中删除

## 7. useFormStatus

提供上次表单提交状态信息

### 注意

1. useFormStatus Hook 必须从在 \<form\> 内渲染的组件中调用。
2. useFormStatus 仅会返回父级 \<form\> 的状态信息。它不会返回同一组件或子组件中渲染的任何 \<form\> 的状态信息。

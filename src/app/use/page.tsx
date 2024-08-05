import { MessageContainer } from "./Message";
import fetchMessage from "./fetchMessage";

export default function App() {
  // 数据可以通过将 Promise 作为 prop 从 服务器组件 传递到 客户端组件 以从服务器流式传输到客户端。
  return <MessageContainer messagePromise={fetchMessage()} />;
}

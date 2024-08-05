export default function fetchMessage() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 3000, "⚛️");
    // 如果希望在传递给 use 的 Promise 被拒绝（rejected）时提供替代值，可以使用 Promise 的 catch 方法。
    // setTimeout(reject, 3000, "⚛️");
  }).catch(() => {
    return "fetchMessage error.";
  });
}

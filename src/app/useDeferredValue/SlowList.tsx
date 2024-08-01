"use client";

function SlowItem({ text }: { text: string }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // 每个 item 暂停 1ms，模拟极其缓慢的代码
  }

  return <li className="item">Text: {text}</li>;
}

const SlowList = function SlowList({ text }: { text: string }) {
  // 仅打印一次。实际的减速是在 SlowItem 组件内部。
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  let items = [];
  for (let i = 0; i < 200; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
};

export default SlowList;

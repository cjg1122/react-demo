"use client";

import { useOptimistic, useState, useRef } from "react";
import { send } from "./actions";
import type { Messages } from "./definitions";

export default function Page() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [messages, setMessages] = useState<Messages[]>([
    {
      text: "你好，在这儿！",
      sending: false,
    },
  ]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Messages[],
    string
  >(messages, (currentState, optimisticValue) => {
    // optimisticValue 是  addOptimisticMessage 传来的
    return [
      ...currentState,
      {
        text: optimisticValue,
        sending: true,
      },
    ];
  });

  async function formAction(formData: FormData) {
    const text = formData.get("message") as string;
    if (!text) {
      return false;
    }
    addOptimisticMessage(text);
    formRef.current?.reset();
    const message = await send(text);
    // 这里可以做发送失败的处理
    setMessages((messages: Messages[]) => {
      return [
        ...messages,
        {
          text: message,
        },
      ];
    });
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small>（发送中……）</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          type="text"
          name="message"
          autoComplete="off"
          placeholder="你好！"
        />
        <button type="submit">发送</button>
      </form>
    </>
  );
}

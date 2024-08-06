"use client";
import { useFormStatus } from "react-dom";

export default function UsernameForm() {
  const { pending, data } = useFormStatus();

  return (
    <div>
      <h3>请求用户名：</h3>
      <input type="text" name="username" disabled={pending} />
      <button type="submit" disabled={pending}>
        提交
      </button>
      <br />
      <p>{data ? `请求 ${data?.get("username")}...` : ""}</p>
    </div>
  );
}

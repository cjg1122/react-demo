"use client";

import { useActionState, useState } from "react";
import { increment } from "./action";

export default function Page() {
  const [state, formAction] = useActionState(increment, 0);
  const [name, serName] = useState("");
  const [gender, setGender] = useState("女");
  return (
    <form action={formAction}>
      {state}
      <p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => serName(e.target.value)}
        />
      </p>
      <p>
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </p>

      <button>提交</button>
    </form>
  );
}

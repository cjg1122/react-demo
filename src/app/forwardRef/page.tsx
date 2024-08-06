"use client";
import { useRef } from "react";
import InputReact18 from "./InputReact18";
import InputReact19 from "./InputReact19";
import Input from "./Input";

export default function Page() {
  const ref18 = useRef<HTMLInputElement>(null);
  const ref19 = useRef<HTMLInputElement>(null);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>
        <InputReact18 placeholder="react 18 for forwardRef" ref={ref18} />
        <button
          type="button"
          onClick={() => {
            ref18.current?.focus();
            // 这行代码不起作用，因为 DOM 节点没有被暴露出来：
            // ref18.current.style.opacity = 0.5;
          }}
        >
          Edit
        </button>
      </div>
      <div>
        <InputReact19 placeholder="react 19 for forwardRef" ref={ref19} />
        <button
          type="button"
          onClick={() => {
            ref19.current?.focus();
          }}
        >
          Edit
        </button>
      </div>
      <div>
        <Input placeholder="react 19 ref prop" ref={ref} />
        <button
          type="button"
          onClick={() => {
            ref.current?.focus();
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}

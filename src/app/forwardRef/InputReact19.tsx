import { useImperativeHandle, useRef } from "react";
import type { ForwardedRef } from "react";

type Ref = {
  focus: () => void;
  scrollIntoView: () => void;
};

type Props = {
  placeholder: string;
  ref: ForwardedRef<Ref>;
};

export default function InputReact19({ placeholder, ref }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current?.focus();
        },
        scrollIntoView() {
          inputRef.current?.scrollIntoView();
        },
      };
    },
    []
  );

  return <input placeholder={placeholder} ref={inputRef} />;
}

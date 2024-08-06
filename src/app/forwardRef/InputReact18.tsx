import { forwardRef, useImperativeHandle, useRef } from "react";

type Ref = {
  focus: () => void;
  scrollIntoView: () => void;
};

type Props = {
  placeholder: string;
};

export default forwardRef<Ref, Props>(function InputReact18(props, ref) {
  const { placeholder } = props;

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
});

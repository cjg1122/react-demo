import type { ForwardedRef } from "react";

type Props = {
  placeholder: string;
  ref: ForwardedRef<HTMLInputElement>;
};

export default function Input({ placeholder, ref }: Props) {
  return <input placeholder={placeholder} ref={ref} />;
}

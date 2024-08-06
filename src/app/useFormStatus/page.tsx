"use client";
import UsernameForm from "./UsernameForm";
import { submitForm } from "./actions";
import { useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await submitForm(formData);
        ref.current?.reset();
      }}
    >
      <UsernameForm />
    </form>
  );
}

import { useTransition } from "react";

type Props = {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export default function TabButton({ children, isActive, onClick }: Props) {
  const [isPending, startTransition] = useTransition();

  if (isActive) {
    return <b>{children}</b>;
  }
  if (isPending) {
    return <b className="text-gray-400">{children}</b>;
  }
  return (
    <button
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
    >
      {children}
    </button>
  );
}

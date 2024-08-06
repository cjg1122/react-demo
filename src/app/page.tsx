import Link from "next/link";

const navs = [
  {
    src: "/useOptimistic",
    name: "useOptimistic",
  },
  {
    src: "/useDeferredValue",
    name: "useDeferredValue",
  },
  {
    src: "/useActionState",
    name: "useActionState",
  },
  {
    src: "/use",
    name: "use-api",
  },
  {
    src: "/forwardRef",
    name: "forwardRef/useImperativeHandle",
  },
  {
    src: "/useTransition",
    name: "useTransition/startTransition",
  },
  {
    src: "/useFormStatus",
    name: "useFormStatus",
  },
];

export default function Page() {
  return (
    <div className="w-screen p-4">
      {navs.map((item) => {
        return (
          <div className="h-9 float-left p-4" key={item.src}>
            <Link href={item.src}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

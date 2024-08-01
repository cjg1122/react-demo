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
];

export default function Page() {
  return (
    <div className="w-screen grid grid-cols-6">
      {navs.map((item) => {
        return (
          <div className="h-9" key={item.src}>
            <Link href={item.src}>{item.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

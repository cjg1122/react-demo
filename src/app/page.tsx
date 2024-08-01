import Link from "next/link";

const navs = ["/useOptimistic"];

export default function Page() {
  return (
    <div className="w-screen grid grid-cols-6">
      {navs.map((src) => {
        return (
          <div className="h-9" key={src}>
            <Link href={src}>useOptimistic</Link>
          </div>
        );
      })}
    </div>
  );
}

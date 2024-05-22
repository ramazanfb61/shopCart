import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex justify-between ">
      <Link href='/'>Shop Cart App</Link>
      <div className="">
        <Link className="mr-2" href="/">Home</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </nav>
  );
}

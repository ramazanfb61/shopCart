'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({path,name}: {path:string,name:string}){
  const activeLink = 'text-blue-500 text-lg font-medium';
  const pathname = usePathname()
  
  return (
    <Link className={`${pathname===path ? activeLink : ''} mx-2`} href={path}>{name}</Link>
  )
}

export default function Navigation() {

  


  return (
    <nav className="flex justify-between border">
      <Link href='/'>Shop Cart App</Link>
      <div className="">
        <NavLink name={'Home'}  path={'/'}      />
        <NavLink name={'Admin'} path={'/admin'} />
        <NavLink name={'Login'} path={'/login'} />
      </div>
    </nav>
  );
}

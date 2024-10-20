"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handler = () => {
    router.push('/login')
  }

  if (pathName.includes('dashboard')){
    return (
      <div className="bg-green-400">
        Dashboard Layout
      </div>
    )
  }
  
  
  return (
    <div className="">
      <nav className="bg-orange-500 px-6 py-4 flex justify-between items-center">
        <h6 className="text-3xl">
          <Link href={`/`}>
            Next <span className="text-cyan-300">Hero</span>
          </Link>
        </h6>
        <ul className="flex justify-between items-center gap-5">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                className={`${pathName === link.path && "text-cyan-300"} `}
                href={link.path}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={handler} className="bg-white text-cyan-400 px-2 py-1 rounded-lg">Login</button>
      </nav>
    </div>
  );
};

export default NavBar;
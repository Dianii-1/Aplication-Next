import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import ActiveLink from "../active-link/ActiveLink";

export const Navbar = () => {
  const navItems = [
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/pricing", name: "Pricing" },
  ];
  return (
    <nav className="bg-blue-800 bg-opacity-30 p-2 m-2 flex rounded">
      <Link className="flex gap-2 items-center" href="/">
      <FaHome />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem}/>
      ))}
    </nav>
  );
};

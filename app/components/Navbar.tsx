"use client";
// import { useTheme } from "next-themes";
import Link from "next/link";
import * as React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [theme, setTheme] = React.useState("dark");

  const handleChangeTheme = () => {
    return setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="layout mt-4">
      <nav className="flex justify-between py-2">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Galuh</h1>
        </Link>
        <div className="border-[1px] border-zinc-400 rounded-md p-3 flex items-center">
          <button onClick={() => handleChangeTheme()}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button>
        </div>
      </nav>
    </div>
  );
}

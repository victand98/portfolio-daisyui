"use client";
import { menu } from "@/utils";
import classNames from "classnames";
import { useTheme } from "next-themes";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillPersonFill, BsFillSunFill, BsMoonFill } from "react-icons/bs";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-60 backdrop-blur transition-all duration-100 bg-base-100">
      <nav className="navbar max-w-7xl mx-auto">
        <div className="flex flex-1 gap-1">
          <span className="tooltip tooltip-bottom" data-tip="Menu">
            <label
              className="btn btn-square btn-ghost drawer-button lg:hidden"
              htmlFor="my-drawer"
            >
              <AiOutlineMenu className="h-5 w-5 stroke-current" />
            </label>
          </span>

          <Link href="/" className="btn btn-ghost gap-2 px-2">
            <BsFillPersonFill className="h-6 w-6" />
            <h1 className="font-title text-lg">
              My <span className="text-primary">Portfolio</span>
            </h1>
          </Link>
        </div>

        <div className="flex-0">
          <ul className="menu hidden lg:menu-horizontal">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <label
            className={classNames("swap swap-rotate", {
              "swap-active": theme === "light",
            })}
            onClick={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          >
            <BsFillSunFill className="swap-on h-5 w-5 fill-current" />
            <BsMoonFill className="swap-off h-5 w-5 fill-current" />
          </label>
        </div>
      </nav>
    </div>
  );
};

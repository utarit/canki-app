import Link from "next/link";
import React from "react";

const tabs = [
  {
    label: "TYD",
    path: "/tyd",
  },
  {
    label: "Biz kimiz",
    path: "/ocit",
  },
  {
    label: "Metronom",
    path: "/metronom",
  },
  {
    label: "Postlar",
    path: "/posts",
  },
];

export default function Header() {
  return (
    <header>
      <nav className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {tabs.map((tab) => (
                <li key={tab.path}>
                  <Link href={tab.path}>{tab.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            <span className="text-primary font-bold">OCİT</span>&nbsp;Canki
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {tabs.map((tab) => (
              <li className="mr-2" key={tab.path}>
                <Link href={tab.path}>{tab.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

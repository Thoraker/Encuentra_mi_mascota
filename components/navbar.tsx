"use client";

import Button from "@/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/dashboard" className="justify-between">
                Ingreso
              </Link>
            </li>
            <li>
              <Link href="/lost-found" className="justify-between">
                Extravíos
              </Link>
            </li>
            <li>
              <Link href="/adoption" className="justify-between">
                Adopción
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="justify-between">
                Nosotros
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Encuentra mi Mascota
        </Link>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/dashboard" className="justify-between">
              Ingreso
            </Link>
          </li>
          <li>
            <Link href="/lost-found" className="justify-between">
              Extravíos
            </Link>
          </li>
          <li>
            <Link href="/adoption" className="justify-between">
              Adopción
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="justify-between">
              Nosotros
            </Link>
          </li>
        </ul>
      </div>

      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-[1.2em]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        Voluntario
      </Button>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        <Link href="/" className="header_logo">
          <Image
            src="/images/Black_logo.svg"
            alt="PureToolHub Logo"
            width={400}
            height={400}
            priority
          />
        </Link>

        <button className="menu_bar"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <ul className={`menu_ul ${isOpen ? "menu_show" : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/finance">Finance</Link>
          </li>
          <li> 
            <Link href="/health">Health</Link>
          </li>
          <li>
            <Link href="/math">Math</Link>
          </li>
          <li>
            <Link href="/tax">Tax</Link>
          </li>
        </ul> 
      </nav>
    </header>
  );
};

export default Navbar;
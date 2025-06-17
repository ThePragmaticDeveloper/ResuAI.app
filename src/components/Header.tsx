"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { IoIosFingerPrint } from "react-icons/io";
import { BiMenuAltRight, BiX } from "react-icons/bi";

export const Header = () => {
  const navigationItems = [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Blog", href: "/blog" },
    { title: "Stories", href: "/stories" },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 glass">
      <div className="container max-w-[90rem] mx-auto flex items-center justify-between py-4 px-4 border-b border-b-muted">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image src="/owl.png" alt="Logo" width={26} height={26} />
          <span className="text-lg font-medium tracking-tight">ResuAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navigationItems.map((item) => (
            <Link key={item.title} href={item.href} className="text-sm hover:text-gray-500 text-muted-foreground">
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu and Authentication */}
        <div className="flex items-center gap-2 lg:hidden">
          <IoIosFingerPrint className="w-6 h-6" />
          <Button variant="outline" className="border-none text-sm">Sign In</Button>
          <Button variant="ghost" className="md:hidden" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <BiX className="icon" /> : <BiMenuAltRight className="icon"/>}
          </Button>
        </div>

        {/* Desktop Authentication */}
        <div className="hidden lg:flex items-center gap-2 border-none">
          <Button variant="outline" className="border-none py-2 text-sm bg-transparent">
           <IoIosFingerPrint className="icon" />
            Sign In
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-md p-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link key={item.title} href={item.href} className="text-lg text-left hover:text-gray-500">
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};


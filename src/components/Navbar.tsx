"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-morphism shadow-lg py-2 mt-4 mx-auto max-w-[90%] rounded-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-premium.png"
            alt="VNB Logo"
            width={180}
            height={60}
            className="h-14 w-auto drop-shadow-md"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#home"
            className="text-gray-700 hover:text-vnb-blue font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="#solar"
            className="text-gray-700 hover:text-vnb-green font-medium transition-colors"
          >
            Solar
          </Link>
          <Link
            href="#tech"
            className="text-gray-700 hover:text-vnb-blue font-medium transition-colors"
          >
            Tech Services
          </Link>
          <Link
            href="#interactive"
            className="text-gray-700 hover:text-vnb-blue font-medium transition-colors"
          >
            Interactive
          </Link>
          <Link
            href="#about"
            className="text-gray-700 hover:text-vnb-blue font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="bg-vnb-blue text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button (simplified) */}
        <button className="md:hidden text-gray-700">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa"; // آیکن بستن از react-icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 right-0 w-full bg-gray-900 text-gray-100 py-4 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="lg:hidden" onClick={toggleMenu}>
            <button className="text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <ul
            className={`lg:flex lg:space-x-8 top-2 absolute lg:static w-full bg-gray-900 lg:bg-transparent lg:text-gray-100 text-center lg:text-left transition-all duration-300 justify-start  transform ${
              isMenuOpen ? "right-0" : "-right-full"
            }`}
          >
            <li>
              <Link href="/" className="hover:text-[#F1F1F1] py-2 px-4 block">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-[#F1F1F1] py-2 block">
                بلاگ‌ها
              </Link>
            </li>
            <li>
              <Link href="/contactme" className="hover:text-[#F1F1F1] py-2 block">
                ارتباط با ما
              </Link>
            </li>
            <li>
              <Link href="/aboutme" className="hover:text-[#F1F1F1] py-2 block">
                درباره‌ی ما
              </Link>
            </li>

            <li className="lg:hidden mt-4">
              <button onClick={toggleMenu} className="text-gray-100">
                <FaTimes size={24} />
              </button>
            </li>
          </ul>
          <div className="text-xl text-red-500 font-bold">خلیج همیشه فارس</div>
        </div>
      </div>
    </nav>
  );
}

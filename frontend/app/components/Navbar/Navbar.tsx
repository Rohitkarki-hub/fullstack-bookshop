"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Moon, ShoppingCart, ChevronDown, Search, Menu, X } from "lucide-react";

const bookCategories = [
  "Fiction",
  "Non-Fiction",
  "Academic",
  "Children",
  "Self-Help",
  "Biography",
  "Science",
  "History",
];

export default function Navbar() {
  const [cartCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [showBooksDropdown, setShowBooksDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const booksRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (booksRef.current && !booksRef.current.contains(e.target as Node)) {
        setShowBooksDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <span
            className="font-black italic text-xl sm:text-2xl tracking-tight text-gray-900"
            style={{ fontFamily: "Georgia, serif" }}
          >
            bookslmandala
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 flex-1 mx-6">
          <div ref={booksRef} className="relative">
            <button
              onClick={() => setShowBooksDropdown(!showBooksDropdown)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
            >
              Books
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  showBooksDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showBooksDropdown && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
                {bookCategories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/books/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/deals"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
          >
            Deals
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center max-w-md">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search size={16} className="text-blue-500" />
            </div>

            <input
              ref={searchRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="What do you want to read?"
              className="w-full pl-9 pr-24 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder-gray-400"
            />

            <div className="absolute inset-y-0 right-2 flex items-center">
              <kbd className="px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded">
                Ctrl + K
              </kbd>
            </div>
          </div>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            aria-label="Toggle dark mode"
          >
            <Moon size={18} />
          </button>

          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium leading-none">
              {cartCount}
            </span>
          </button>

          <Link
            href="/login"
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="md:hidden flex items-center gap-3 flex-shrink-0 ml-auto">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600 hover:text-gray-900"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium leading-none">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 max-h-screen overflow-y-auto">
          <div className="px-4 py-3 space-y-3">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-blue-500" />
              </div>

              <input
                ref={searchRef}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="What do you want to read?"
                className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder-gray-400"
              />
            </div>

            <div ref={booksRef} className="relative">
              <button
                onClick={() => setShowBooksDropdown(!showBooksDropdown)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
              >
                Books
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    showBooksDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showBooksDropdown && (
                <div className="mt-1 ml-2 space-y-1 border-l border-gray-200 pl-3">
                  {bookCategories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/books/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block px-3 py-1.5 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/deals"
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
            >
              Deals
            </Link>

            <div className="border-t border-gray-200 pt-3 space-y-2">
              <Link
                href="/login"
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
              >
                Login
              </Link>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Moon size={16} />
                Dark Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

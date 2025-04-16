
import React, { useState } from 'react';
import Link from 'next/link';

type HeaderProps = {
  visibleBox:string
}

export const Header = ({visibleBox}:HeaderProps) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" text-white py-4">
      <div className=" flex justify-end items-center ">
      <div className=" flex bg-[#050a13] p-1 gap-4 h-[60px] pl-7 pr-2 rounded-[9px]">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-xl">Simbian</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Company</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center space-x-1">
              <span>Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <Link href="/blog" className="hover:text-blue-300 transition">Blog</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/demo" className={`${visibleBox === "box1" ? " bg-[#01112e] text-white" : "bg-[#f9f9fa] text-black" }  px-4 py-2 rounded-md flex items-center h-[52px]`}>
            Book a Demo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          </div>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${visibleBox === "box1" ? " text-white" : "text-black" }  focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 px-4 bg-navy-800">
          <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-between py-2">
              <span>Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex items-center justify-between py-2">
              <span>Company</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex items-center justify-between py-2">
              <span>Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <Link href="/blog" className="py-2">Blog</Link>
            <Link href="/demo" className="bg-blue-500 text-white px-4 py-2 rounded-md text-center mt-2">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
    );
}


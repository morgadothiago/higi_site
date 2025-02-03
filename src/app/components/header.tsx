'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Logo from '@/app/assets/Logo-sem-fundo-preview 1.png'
import { MenuIcon } from 'lucide-react'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='h-16 w-full bg-[#176481] relative shadow-md items-center'>
      <div className="flex justify-center items-center px-4 py-4">
        <div className="flex flex-row  gap-2">
          <Image src={Logo} alt="logo" width={50} height={50} />

          <h1 className='text-white text-lg font-extrabold tracking-wide shadow-lg hover:text-[#1a7494] transition duration-300 md:text-4xl'>Higistofados em Geral</h1>
        </div>
        <div className="ml-auto">
          <button 
            className="text-white md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className='w-6 h-6' />
          </button>
          {/* Floating menu for mobile */}
          {isMenuOpen && (
            <div className="absolute right-0 top-16 bg-[#176481] w-full shadow-lg rounded-b-lg md:hidden">
              <div className="flex flex-col p-4">
                <a href="#home" className="text-white py-2 hover:bg-[#1a7494] px-2 rounded transition duration-300">Home</a>
                <a href="#about" className="text-white py-2 hover:bg-[#1a7494] px-2 rounded transition duration-300">About</a>
                <a href="#services" className="text-white py-2 hover:bg-[#1a7494] px-2 rounded transition duration-300">Services</a>
                <a href="#contact" className="text-white py-2 hover:bg-[#1a7494] px-2 rounded transition duration-300">Contact</a>
              </div>
            </div>
          )}
          {/* Menu for desktop */}
          <div className="hidden md:flex md:gap-4 ml-4">
            <a href="#home" className="text-white hover:underline transition duration-300">Home</a>
            <a href="#about" className="text-white hover:underline transition duration-300">About</a>
            <a href="#services" className="text-white hover:underline transition duration-300">Services</a>
            <a href="#contact" className="text-white hover:underline transition duration-300">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { MenuIcon, UserPlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Mova a declaração da constante Logo para depois das importações
const Logo = '/Logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='h-16 w-full bg-[#176481] fixed top-0 left-0 z-50 shadow-md flex items-center'>
      <div className="flex justify-between items-center px-4 sm:px-20 py-4 w-full container mx-auto">
        <div className="flex flex-row gap-2 items-center">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <h1 className='text-white text-sm sm:text-sm font-extrabold tracking-wide shadow-lg hover:text-[#1a7494] transition duration-300 md:text-2xl'>Higistofados em Geral</h1>
        </div>
        <div className="ml-auto flex items-center">
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
                <Button className='bg-[#1a7494] text-white hover:bg-[#1a7494] transition duration-300 flex items-center rounded-lg shadow-md hover:shadow-xl p-4'>
                <UserPlusIcon className='w-6 h-6' />
                  Fazer login 
              </Button>
             
              </div>

            
            </div>

          )}
          {/* Menu for desktop */}
          <div className="hidden md:flex md:gap-6 ml-4 items-center">

            <a href="#home" className="text-white hover:underline transition duration-300">Home</a>
            <a href="#about" className="text-white hover:underline transition duration-300">About</a>
            <a href="#services" className="text-white hover:underline transition duration-300">Services</a>
            <a href="#contact" className="text-white hover:underline transition duration-300">Contact</a>

            <Button className='bg-[#1a7494] text-white hover:bg-[#1a7494] transition duration-300 flex items-center rounded-lg shadow-md hover:shadow-xl p-4'>
              <UserPlusIcon className='w-6 h-6' />
                  Fazer login 
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

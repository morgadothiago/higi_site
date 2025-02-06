'use client'

import Image from 'next/image'
import React from 'react'
import logo from '@/app/assets/Logo.png'
import { 
  InstagramLogo,
  FacebookLogo,
  TiktokLogo 
} from 'phosphor-react'


export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-[#176481] to-[#2582A4] py-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-5 md:px-20'>
        <div className="flex items-center mb-5 md:mb-0">
          <Image src={logo} alt="logo" width={100} height={100} className="transition-transform duration-300 hover:scale-110" />
          <h1 className='text-white text-3xl md:text-4xl font-bold ml-5'>Higiestofados</h1>
        </div>
        <nav className='text-white mb-5 md:mb-0 flex flex-col'>
          <h2 className='text-lg font-bold mb-2'>Menu</h2>
          <ul className='flex flex-col sm:flex-row sm:items-center '>
            <li className='hover:underline cursor-pointer'>Home</li>
            <li className='hover:underline cursor-pointer'>Serviços</li>
            <li className='hover:underline cursor-pointer'>Sobre nós</li>
            <li className='hover:underline cursor-pointer'>Contato</li>

          </ul>
        </nav>
        <div className='flex space-x-6'>
          <a href="#" className='text-white hover:text-gray-300 transition duration-200 flex items-center'>
            <InstagramLogo size={32} /> Instagram
          </a>
          <a href="https://www.tiktok.com/@sergio.simoes85?_t=ZM-8th5g3J0FKX&_r=1" target='_blank' className='text-white hover:text-gray-300 transition duration-200 flex items-center'>
            <TiktokLogo size={32} /> TikTok
          </a>
          <a href="#" className='text-white hover:text-gray-300 transition duration-200 flex items-center'>
            <FacebookLogo size={32} /> Facebook
          </a>
        </div>

      </div>

      <div className='text-center text-white mt-5'>
        <p className='text-sm'>© 2023 Higiestofados. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

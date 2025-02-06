'use client'
import Image from 'next/image'

import React from 'react'

import Logo from '@/app/assets/logo2x.png'
import { Button } from '@/components/ui/button'
import { WhatsappLogo } from 'phosphor-react'

export default function Abouts() {
  return (
    <>
    <div className='w-full flex items-center justify-center py-3 '>
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-[#fff] text-2xl font-bold p-5'>Sobre Nós</h1>
      </div> 
    </div>


    <div className="flex items-center justify-center sm:flex-row flex-col">
        <div className="w-[50%] sm:w-[30%] ">
          <Image src={Logo} alt="Sobre Nós" className='w-[100%] h-[100%]  sm:w-[50%] sm:h-[50%]' />
        </div>

        <div className="sm:w-[50%] w-full px-5 text-white">
          <p className='text-sm'>Na Higestofados, temos paixão por transformar a aparência e a sensação dos seus estofados! Com anos de experiência no mercado, oferecemos serviços profissionais de limpeza que vão muito além do visual, garantindo a eliminação de ácaros, manchas e odores.
          Nosso objetivo é trazer conforto, higiene e um ambiente renovado para sua casa ou empresa. Trabalhamos com equipamentos de última geração e produtos ecologicamente corretos, sempre pensando na saúde da sua família, dos seus pets e no cuidado com o meio ambiente.</p>
        </div>
       
      </div>    
    </>
  )

}

'use client'

import React from 'react'
import CardItem from './cardItem'

import image1 from '@/app/assets/limpeza1.png'
import image2 from '@/app/assets/limpeza2.png'
import image3 from '@/app/assets/limpeza3.png'


export default function Services() {
  return (
    <>
    <div className='w-full flex items-center justify-center py-3 '>
      <div className='w-full flex items-center justify-center'>
        <h1 className='text-[#fff] text-2xl font-bold p-5'>Serviços Prestados</h1>
      </div> 
    </div>

     <div className="bg-gradient-to-r from-[#176481] to-[#1e8c9c] flex flex-col md:flex-row justify-center items-stretch gap-6 px-8 py-10 rounded-lg shadow-lg w-[100%] mx-auto">
       <CardItem 
         image={image1} 
         title="Limpeza de Casas" 
         description="Oferecemos serviços de limpeza de casas com qualidade e eficiência." 
         buttonText="Chamar no zap" 
         onButtonClick={() => {}} 
       />
       <CardItem 
         image={image2} 
         title="Limpeza de Escritórios" 
         description="Serviços de limpeza de escritórios com atenção aos detalhes." 
         buttonText="Chamar no zap" 
         onButtonClick={() => {}} 
       />
       <CardItem 

         image={image3} 
         title="Limpeza Pós-Obra" 
         description="Limpeza especializada após obras e reformas." 
         buttonText="Chamar no zap" 
         onButtonClick={() => {}} 
       />
     </div>
    </> 
  )
}

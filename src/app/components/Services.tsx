import React from 'react'
import Image from 'next/image'

import limpeza1 from '@/app/assets/limpeza1.png'
import limpeza2 from '@/app/assets/limpeza2.png'
import limpeza3 from '@/app/assets/limpeza3.png'
import { Button } from '@/components/ui/button'


export default function Services() {
  const products = [
    {
      id: 1,
      title: 'Serviço de Limpeza de Sofá',
      description: 'Limpeza profunda e remoção de manchas para sofás.',
      image: limpeza1,
      button: 'Solicitar Serviço'

    },
    {
      id: 2,
      title: 'Limpeza de Carpete',
      description: 'Serviço especializado para deixar seu carpete como novo.',
      image: limpeza2,
      button: 'Solicitar Serviço'


    },
    {
      id: 3,
      title: 'Limpeza de Estofados',
      description: 'Limpeza de estofados com produtos de alta qualidade.',
      image: limpeza3,
      button: 'Solicitar Serviço'


    },
  ];
  return (
    <div className='w-full flex flex-col items-center justify-center py-8'>
      <h1 className='text-white text-4xl font-extrabold p-5 shadow-lg rounded-lg bg-opacity-50 text-center mb-8'>Serviços Prestados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mx-auto">
        {products.map(product => (
          <div key={product.id} className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <Image src={product.image} alt={product.title} className="w-full h-48 object-fill bg-black" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">{product.title}</h2>
              <p className="text-white mt-2">{product.description}</p>
              <Button className="mt-4 bg-white text-blue-600 py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300 shadow-md hover:shadow-lg">
                {product.button}
              </Button>
            </div>

          </div>
        ))}
      </div>
    </div>
   
  )
}

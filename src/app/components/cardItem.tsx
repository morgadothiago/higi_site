'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { WhatsappLogo } from 'phosphor-react'

interface CardItemProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function CardItem({ image, title, description, buttonText, onButtonClick }: CardItemProps) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/3 h-64">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover rounded-tl-2xl rounded-tr-2xl"
        />
      </div>
      
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <h3 className="text-gray-800 text-2xl font-bold mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        
        <button 
          onClick={onButtonClick}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          <WhatsappLogo size={24} weight="fill" />
          {buttonText}
        </button>
      </div>
    </div>
  )
} 
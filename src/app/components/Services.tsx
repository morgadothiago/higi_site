'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import limpeza1 from '@/app/assets/limpeza1.png'
import limpeza2 from '@/app/assets/limpeza2.png'
import limpeza3 from '@/app/assets/limpeza3.png'

const products = [
  {
    id: 1,
    title: 'Limpeza de Sofá',
    description: 'Limpeza profunda e remoção de manchas para sofás com produtos de alta qualidade.',
    image: limpeza1,
    price: 'A partir de R$ 150,00'
  },
  {
    id: 2,
    title: 'Limpeza de Carpete',
    description: 'Serviço especializado para deixar seu carpete como novo, eliminando ácaros e sujeiras.',
    image: limpeza2,
    price: 'A partir de R$ 120,00'
  },
  {
    id: 3,
    title: 'Limpeza de Estofados',
    description: 'Limpeza profissional de estofados com produtos especializados e tecnologia avançada.',
    image: limpeza3,
    price: 'A partir de R$ 180,00'
  },
];



export default function Services() {
  const seedMenssages = () => {
    const message = "Olá, gostaria de saber mais sobre os serviços de limpeza.";
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+5511959652987"; // Número do WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.location.href = whatsappLink;
}
  return (
    <section className="w-full py-20 sm:px-32 bg-gradient-to-b from-[#176481] to-[#2582A4]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Oferecemos soluções profissionais de limpeza para seu conforto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <p className="text-lg font-semibold text-[#176481] mb-6">
                  {product.price}
                </p>
                <button 
                  className="w-full bg-[#176481] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-[#2582A4] transition-colors duration-300 group"
                  onClick={seedMenssages}
                >
                  Solicitar Orçamento

                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

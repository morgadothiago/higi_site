'use client'
import { Button } from '@/components/ui/button';
import { MessageCircleIcon } from 'lucide-react';
import React from 'react';
import limpeza from '@/app/assets/limpeza.png'

const Main = () => {
  const seedMenssages = () => {
    const message = "Olá, gostaria de saber mais sobre os serviços de limpeza.";
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+5511959652987"; // Número do WhatsApp
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.location.href = whatsappLink;
}

  return (
    <section className="w-full  pt-16">
      <div className="container mx-auto">
        <div className="w-full h-[30rem] bg-cover bg-[#176481] bg-center flex items-center justify-center" style={{ backgroundImage: `url(${limpeza.src})` }} >
          <div className="sm:mx-10   bg-[#176481] bg-opacity-30 rounded-lg p-12 flex flex-col items-center justify-center shadow-lg transition-transform transform animate-bounce mt-20">
            <h1 className="text-lg font-bold text-white p-4 text-center mb-6">Transforme seus estofados com nossos serviços de limpeza especializados!</h1>
            <Button onClick={seedMenssages} className='bg-[#176481] text-white hover:bg-[#1a7494] transition duration-300 flex items-center rounded-lg shadow-md hover:shadow-xl p-4'>
              <MessageCircleIcon className='w-6 h-6 mr-2' />
              Enviar uma mensagem 
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
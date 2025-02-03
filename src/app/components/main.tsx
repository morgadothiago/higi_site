'use client'
import { Button } from '@/components/ui/button';
import { MessageCircleIcon } from 'lucide-react';
import React from 'react';

const Main = () => {
  function seedMenssages(data: any) {
    const { nome, email, telefone, descricao } = data;
    const message = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Meu telefone é ${telefone}. Descrição: ${descricao}.`;

    // Codifica a mensagem corretamente
    const encodedMessage = encodeURIComponent(message.trim());

    // Número do WhatsApp
    const phoneNumber = "+5511959652987";

    // Monta o link de maneira exata
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappLink, "_blank");
  
  }


  return (
    <div className="w-full h-[30rem] bg-cover bg-center bg-imagem-herói flex items-center justify-center">
      <div className="sm: mx-10 sm:px-20 px-4 bg-white bg-opacity-30 rounded-lg p-12 flex flex-col items-center justify-center shadow-lg transition-transform transform animate-bounce">
        <h1 className="text-lg font-bold text-white p-4 text-center mb-6">Transforme seus estofados com nossos serviços de limpeza especializados!</h1>
        <Button onClick={seedMenssages} className='bg-[#176481] text-white hover:bg-[#1a7494] transition duration-300 flex items-center rounded-lg shadow-md hover:shadow-xl p-4'>
          <MessageCircleIcon className='w-6 h-6 mr-2' />
          Enviar uma mensagem 
        </Button>
      </div>
    </div>
  );
};

export default Main;
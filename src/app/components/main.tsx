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
    const phoneNumber = "+5511920052992";

    // Monta o link de maneira exata
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappLink, "_blank");
  
  }


  return (
    <div className="w-full h-[30rem] bg-cover bg-center bg-[#176481] bg-[url('@/app/assets/limpeza.png')] flex items-center justify-center">
      <div className="bg-white bg-opacity-30 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg">
        <h1 className="text-3xl font-bold text-white p-4 text-center">Bem-vindo ao nosso site!</h1>
          <Button className='bg-[#176481] text-white hover:bg-[#1a7494] transition duration-300 flex items-center' onClick={seedMenssages}>
          <MessageCircleIcon className='w-5 h-5 mr-2' />

          Enviar uma mensagem 
        </Button>

      </div>
    </div>
  );
};

export default Main;
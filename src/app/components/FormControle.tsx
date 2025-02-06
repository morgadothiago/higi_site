'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MessageCircle, Mail, User, Phone } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormControle() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { nome, email, phone, description } = data;
    const newMessage = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Meu telefone é ${phone}. ${description}`;


    // Codifica a mensagem corretamente
    const encodedMessage = encodeURIComponent(newMessage.trim());

    // Número do WhatsApp
    const phoneNumber = "+5511959652987";

    // Monta o link de maneira exata
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
   console.log(whatsappLink)
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappLink, "_blank");
  }
  return (
    <div className='w-full flex flex-col items-center justify-center py-10 bg-gradient-to-r from-[#176481] to-[#1e8c9c]'>
      <div className='w-full flex items-center justify-center mb-10'>
        <h1 className='text-white text-5xl font-extrabold p-5 shadow-lg rounded-lg bg-opacity-60'>Controle de Formulário</h1>
      </div> 
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-8 rounded-lg ">
        <div className="mb-6 relative">
          <Label htmlFor="name" className="block text-gray-800 text-sm font-semibold mb-2">
            Nome
          </Label>
          <User size={24} className="absolute left-3 top-9 text-gray-400" />
          <Input
            id="name"
            type="text"
            placeholder="Seu nome"
            required
            {...register("nome")}
            className="shadow-md border border-gray-300 rounded-lg w-full py-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1e8c9c] transition duration-300 ease-in-out transform hover:shadow-lg"
          />
        </div>
        <div className="mb-6 relative">
          <Label htmlFor="email" className="block text-gray-800 text-sm font-semibold mb-2">
            Email
          </Label>
          <Mail size={24} className="absolute left-3 top-9 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="Seu email"
            required
            {...register("email")}
            className="shadow-md border border-gray-300 rounded-lg w-full py-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1e8c9c] transition duration-300 ease-in-out transform hover:shadow-lg"
          />
        </div>
        <div className="mb-6 relative">
          <Label htmlFor="phone" className="block text-gray-800 text-sm font-semibold mb-2">
            Telefone
          </Label>
          <Phone size={24} className="absolute left-3 top-9 text-gray-400" />
          <Input
            id="phone"
            type="tel"
            placeholder="Seu telefone"
            required
            {...register("phone")}

            className="shadow-md border border-gray-300 rounded-lg w-full py-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1e8c9c] transition duration-300 ease-in-out transform hover:shadow-lg"
          />
        </div>
        <div className="mb-6 relative">
          <Label htmlFor="message" className="block text-gray-800 text-sm font-semibold mb-2">
            Mensagem
          </Label>
          <MessageCircle size={24} className="absolute left-3 top-9 text-gray-400" />
          <Textarea
            id="message"
            placeholder="Sua mensagem"
            rows={4}
            required
            {...register("description")}
            className="shadow-md border border-gray-300 rounded-lg w-full py-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#1e8c9c] transition duration-300 ease-in-out transform hover:shadow-lg"
          />
        </div>
        <div className="flex items-center justify-center">
            <Button
              className="bg-gradient-to-r from-[#1e8c9c] to-[#176481] hover:from-[#176481] hover:to-[#1e8c9c] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-110"
              type="submit"
            >
              Enviar Mensagem
            </Button>
        </div>
      </form>
    </div>
  )
}

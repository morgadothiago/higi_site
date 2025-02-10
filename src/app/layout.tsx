import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import './globals.css'

export const metadata: Metadata = {
  title: "Higiestofados - Transforme Seu Espaço com Limpeza Profunda",
  description: "Experimente a transformação do seu ambiente com nossos serviços de limpeza profissional de estofados, garantindo conforto e higiene.",
  keywords: "Limpeza de Estofados, Higiene, Conforto, Serviços de Limpeza, Transformação de Espaços",
  openGraph: {
    title: "Higiestofados - Transforme Seu Espaço com Limpeza Profunda",
    description: "Experimente a transformação do seu ambiente com nossos serviços de limpeza profissional de estofados, garantindo conforto e higiene.",
    url: "https://www.higiestofados.com",
    images: [
      "https://www.higiestofados.com/Logo.png", // URL absoluta da imagem
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Higiestofados - Transforme Seu Espaço com Limpeza Profunda",
    description: "Experimente a transformação do seu ambiente com nossos serviços de limpeza profissional de estofados, garantindo conforto e higiene.",
    images: [
      "https://www.higiestofados.com/Logo.png", // URL absoluta da imagem
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

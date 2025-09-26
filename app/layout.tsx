import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Cretus by Pomelo - Gestor de Cobranza IA',
  description: 'El gestor de cobranza más avanzado que utiliza inteligencia artificial para recuperar deudas de manera eficiente y automatizada.',
  keywords: ['cobranza', 'IA', 'inteligencia artificial', 'gestión de deudas', 'Pomelo', 'fintech'],
  authors: [{ name: 'Pomelo' }],
  openGraph: {
    title: 'Cretus by Pomelo - Gestor de Cobranza IA',
    description: 'Recupera la deuda con inteligencia artificial',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

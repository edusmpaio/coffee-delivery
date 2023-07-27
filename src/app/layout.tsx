import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Baloo_2 as Baloo } from 'next/font/google'

import Image from 'next/image'
import logo from '../assets/logo.svg'

import { IoCart, IoLocationSharp } from 'react-icons/io5'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baloo = Baloo({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo',
})

export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'Desafio do programa Ignite da Rocketseat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${baloo.variable} bg-base-100 font-sans text-base-700`}
      >
        <div className="mx-auto w-full max-w-[1120px]">
          <header className="flex items-center justify-between py-8">
            <Image src={logo} alt="Coffee Delivery" width={84.95} height={40} />

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-md bg-purple-300 p-2">
                <IoLocationSharp className="text-[22px] text-purple-500" />
                <span className="text-sm leading-[130%] text-purple-800">
                  Porto Alegre, RS
                </span>
              </div>
              <div className="rounded-md bg-yellow-300 p-2">
                <IoCart className="text-[22px] text-yellow-900" />
              </div>
            </div>
          </header>

          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}

import Image from 'next/image'
import coffeeImg from '../assets/Coffee.png'

import { IoCart } from 'react-icons/io5'
import { PiPlusBold, PiMinusBold } from 'react-icons/pi'

export function CoffeeCard() {
  return (
    <div className="flex w-full max-w-[256px] flex-col items-center rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-200 px-6 py-5">
      <Image className="-mt-11 mb-3" src={coffeeImg} alt="cafe" />

      <div className="flex flex-wrap items-center justify-center gap-1">
        <span className="mb-4 rounded-full bg-yellow-300 px-2 py-1 text-[10px] font-bold uppercase text-yellow-900">
          Tradicional
        </span>
      </div>

      <div className="mb-8 space-y-2 text-center">
        <strong className="font-title text-xl font-bold leading-[130%] text-base-800">
          Expresso Tradicional
        </strong>
        <p className="text-sm leading-[130%] text-base-600">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>

      <div className="flex w-full items-center justify-between">
        <span className="font-title text-2xl font-extralight leading-[130%]">
          <span className="font-sans text-sm">R$</span> 9,90
        </span>

        <div className="flex items-center gap-2">
          <div className="flex max-w-[76px] items-center gap-1 rounded-md bg-base-400 p-2">
            <button className="group">
              <PiMinusBold className="text-purple-500 transition-colors hover:text-purple-800 group-disabled:opacity-50" />
            </button>
            <input
              className="w-full bg-base-400 text-center text-base text-base-900 outline-none"
              type="number"
              readOnly
              value={1}
            />
            <button className="group">
              <PiPlusBold className="text-purple-500 transition-colors hover:text-purple-800 group-disabled:opacity-50" />
            </button>
          </div>

          <button className="rounded-md bg-purple-800 p-2 transition-colors hover:bg-purple-500">
            <IoCart className="text-[22px] text-base-200" />
          </button>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

import { PiPlusBold, PiMinusBold, PiTrash } from 'react-icons/pi'

export function CartItem() {
  return (
    <div className="flex items-start justify-between border-b-[1px] border-b-base-400 pb-6">
      <div className="flex items-center gap-5">
        <Image src="/expresso-tradicional.png" alt="" width={64} height={64} />

        <div className="flex flex-col gap-2">
          <span className="leading-[130%] text-base-800">
            Expresso Tradicional
          </span>

          <div className="flex gap-2">
            <div className="flex h-8 max-w-[76px] items-center gap-1 rounded-md bg-base-400">
              <button className="group h-full flex-1 pl-2">
                <PiMinusBold className="text-sm text-purple-500 transition-colors group-hover:text-purple-800 group-disabled:opacity-50" />
              </button>
              <input
                className="w-full bg-base-400 text-center text-base text-base-900 outline-none"
                type="number"
                readOnly
                value={1}
              />
              <button className="group h-full flex-1 pr-2">
                <PiPlusBold className="text-sm text-purple-500 transition-colors group-hover:text-purple-800 group-disabled:opacity-50" />
              </button>
            </div>

            <button className="flex items-center gap-1 rounded-md bg-base-400 px-2 text-xs uppercase transition-colors hover:bg-base-500">
              <PiTrash className="text-base text-purple-500" />
              Remover
            </button>
          </div>
        </div>
      </div>

      <span className="font-bold">R$ 9,90</span>
    </div>
  )
}

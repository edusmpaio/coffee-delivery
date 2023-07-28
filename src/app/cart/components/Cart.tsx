import { ReactNode } from 'react'
import { CartItem } from './CartItem'

interface CartProps {
  children: ReactNode
}

export function Cart({ children }: CartProps) {
  return (
    <div className="space-y-6 rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-base-200 p-10">
      <CartItem />
      <CartItem />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-sm">Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Total</span>
          <span className="text-xl font-bold">R$ 33,20</span>
        </div>
      </div>

      {children}
    </div>
  )
}

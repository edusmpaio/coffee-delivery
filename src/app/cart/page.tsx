import { Cart } from './components/Cart'

export default function CartPage() {
  return (
    <section className="mx-auto w-full max-w-[1120px] pb-40 pt-10">
      <form className="grid w-full grid-cols-[1fr_448px] gap-8">
        <div>
          <strong className="mb-4 block font-title text-lg font-bold leading-[130%] text-base-800">
            Complete seu pedido
          </strong>
        </div>

        <div className="max-w-md">
          <strong className="mb-4 block font-title text-lg font-bold leading-[130%] text-base-800">
            Cafés selecionados
          </strong>

          <Cart>
            <button
              type="submit"
              className="w-full rounded-md bg-yellow-500 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-yellow-900"
            >
              Confirmar pedido
            </button>
          </Cart>
        </div>
      </form>
    </section>
  )
}

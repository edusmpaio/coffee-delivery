import Image from 'next/image'
import heroImage from '../../assets/hero-img.png'
import bgBlur from '../../assets/bg-blur.svg'

import { IoCart } from 'react-icons/io5'
import { PiCoffeeFill, PiTimerFill, PiPackageFill } from 'react-icons/pi'

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-[1120px] items-start gap-14 pb-[108px] pt-[94px]">
        <div className="space-y-16">
          <div className="space-y-4">
            <h1 className="font-title text-5xl font-extrabold leading-[130%] text-base-900">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-xl leading-[130%] text-base-800">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <div className="flex w-[231px] items-center gap-3">
              <div className="rounded-full bg-yellow-900 p-2">
                <IoCart className="text-base text-base-100" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-base-700 p-2">
                <PiPackageFill className="text-base text-base-100" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="flex w-[231px] items-center gap-3">
              <div className="rounded-full bg-yellow-500 p-2">
                <PiTimerFill className="text-base text-base-100" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-purple-500 p-2">
                <PiCoffeeFill className="text-base text-base-100" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        <div>
          <Image src={heroImage} alt="Imagem de um café" />
        </div>
      </div>

      <Image
        loading="lazy"
        className="absolute top-0 z-[-1] h-full w-full object-cover"
        src={bgBlur}
        alt=""
      />
    </section>
  )
}

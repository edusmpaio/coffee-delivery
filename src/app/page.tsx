import { Hero } from '../components/Hero'
import { CoffeeCard } from '../components/CoffeeCard'

import { coffeeData } from '@/data/coffee'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-[1120px] pb-40 pt-8">
        <h2 className="font-title text-[32px] font-extrabold leading-[130%] text-base-800">
          Nossos cafés
        </h2>

        <div className="mt-[54px] flex flex-wrap gap-x-8 gap-y-10">
          {coffeeData.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </>
  )
}

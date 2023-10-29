import { CarCard, Filter, Hero, Search } from '@/components'

import { getCars } from '@/utils'

export default async function Home() {

  const allCars = await getCars();
  console.log(allCars)

  // check if data is empty
  const isEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className=" overflow-hidden">
      <Hero />

      <div className=" mt-12 padding-x padding-y max-width" id='discover'>
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Cars Catalogue
          </h1>
          <p className="capitalize">
            Check out cars you might like
          </p>
        </div>

        <div className="home__filters">
          <Search />

          <div className="home__filter-container">
            <Filter title='fuel' />
            <Filter title='year' />
          </div>


        </div>

        {!isEmpty ? (
          <section className="">
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className=" text-xl font-bold text-black">
                Oops!, no cars found
            </h2>
            <p className="">
              {allCars?.message}
            </p>
          </div>
        )}

      </div>
      {/* <Demo /> */}
      
    </main>
  )
}

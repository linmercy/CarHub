"use client"

import { CarProps } from "@/types"
import { calculateCarRent } from "@/utils";
import Image from "next/image";

 
interface CarCardProps {
    car: CarProps
}
const CarCard = ({car} : CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
          <h2 className="car-card__content-title">
              {make} {model}
          </h2>

      </div>
      <p className="flex mt-6 text-[32px]">
            <span className="car-card__price-dollar ">$</span>
            <span className="car-card__price">
              {carRent}
          </span>
            <span className="car-card__price-day">/day</span>
      </p>

      <div className=" car-card__image">
        <Image src="/hero.png" alt="car"   fill priority className=" object-contain" />
      </div>

      <div className="car-card__icon-container">
        <div className="car-card__icon">
          <Image src="/steering-wheel.svg" alt="steering-wheel" width={20} height={20} />

          <p className="car-card__icon-text">
            {transmission === 'a' ? 'Automatic' : 'Manual'}
          </p>
        </div>

        <div className="car-card__icon">
          <Image src="/tire.svg" alt="tire" width={20} height={20} />

          <p className="car-card__icon-text">
            {drive.toUpperCase()}
          </p>
        </div>

        <div className="car-card__icon">
          <Image src="/gas.svg" alt="steering-wheel" width={20} height={20} />

          <p className="car-card__icon-text">
            {city_mpg} MPG
          </p>
        </div>
      </div>

      <div className=""></div>
    </div>
  )
}

export default CarCard
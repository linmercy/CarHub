"use client";

import { Button } from '.'
import Image from 'next/image';


const Hero = () => {
    const handleScroll = () => {

    } 
  return (
    <div>
        <div className= 'hero'>
            <div className=" px-10 pt-36 flex-1">
                  <h1 className='hero__title'>
                    Discover a wide range of cars - all under one roof
                </h1>

                  <h2 className="hero__subtitle">
                    Book, rent and drive. the choices are endless, and the process is simple!
                </h2>

                <Button 
                    title="Explore Cars"
                    styles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            
            <div className=" hero__image-container">
                <div className="hero__image">
                    <Image 
                        src="/hero.png"
                        alt="hero" 
                        fill
                        className='object-contain'
                    />  
                </div>

                <div className='hero__image-overlay' />
            </div>

        </div>

    </div>
  )
}

export default Hero
import { MouseEventHandler } from 'react'
export interface ButtonProps{
    title: string;
    styles?: string;
    type?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
   city_mpg: number;
   class: string;
   combination_mpg: number;
   cylinders: number;
   displacement: number;
   drive: string;
   fuel_type: string;
   highway_mpg: number;
   make: string;
   model: string;
   transmission: string;
   year: number;
}
import { CarProps } from "@/types";
import axios from "axios";

export async function getCars() {
    try {
        const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`;

        const res = await axios.get(url, {
            headers: {
                'X-RapidAPI-Key': 'efa73eb242msh747cdb49ad98f91p1877a0jsn7b8c84ff1d22',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            },
            params: { model: 'corolla' },

        })

        const data = res.data

        return data;
    } catch (error) {
        console.error("uhm!, that was not supposed to happen:", error)
    }
    
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};

export const deleteSearchParams = (type: string) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);

    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());

    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

    return newPathname;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
} 

// const axios = require('axios');

// const options = {
//     method: 'GET',
//     url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//     params: { model: 'corolla' },
//     headers: {
//         'X-RapidAPI-Key': 'efa73eb242msh747cdb49ad98f91p1877a0jsn7b8c84ff1d22',
//         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//     }
// };

// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }
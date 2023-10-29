"use client";

import { useState } from "react";
import { Manufacturer } from ".";



const Search = () => {
  const handleSearch = () => {

  };

  const [manufacturer, setManufacturer] = useState('')

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Manufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default Search
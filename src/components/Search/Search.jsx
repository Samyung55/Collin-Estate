import { Button, Flex, Heading } from '@chakra-ui/react'
import { useContext} from "react";
import { HouseContext } from '../../context/HouseContext';
import "./Search.css"
import LocationFilter from "./LocationFilter";
import PriceFilter from "./PriceFilter";
import PropertyTypeFilter from "./PropertyTypeFilter";

const Search = () => {

  const { searchHandler } = useContext(HouseContext);

  return (
    <div className='flex'>

      <div className='search' size={{base: 'sm', md: 'md'}}>Search the price you looking for</div>
        <div className='flex-2'>
        <LocationFilter />
        <PropertyTypeFilter />
        <PriceFilter />
        <button onClick={searchHandler}>Search</button>
        </div>
    </div>
  )
}

export default Search
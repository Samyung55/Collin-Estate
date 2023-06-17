import React, { useState, useContext} from 'react';
import { Center, Grid, Heading, Spinner, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { HouseContext } from "../../context/HouseContext";
import HouseItem from './HouseItem';
import Navbar from '../Navbar/Navbar';
import Search from './../Search/Search';

const HouseList = () => {
  // Assuming you have these properties
  const [currentPage, setCurrentPage] = useState(1);
  const [housesPerPage] = useState(10); // Number of houses to display per page
  const { houses, isLoading } = useContext(HouseContext);

  if (isLoading) {
    // Add your loading state handling here
    return (
    <Center>
    <Spinner align='center' color='pink.500' />
    </Center>
    )
  }

  if (houses.length === 0) {
    return (
      <Stack maxH='400px'>
        <Heading size="lg" p={{base: '6', md: '10'}} align="center">
          Oops... Can try another one?
        </Heading>
      </Stack>
    );
  }

  // Calculate pagination variables
  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Navbar />
    <br />
    <br />
    <Search />
      {/* Render your houses */}
      <Grid my="-20" p="20" rowGap="8" gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
        {currentHouses.map((item) => (
          <Link to={`/property-details/${item.id}`} key={item.id}>
            <HouseItem key={item.id} house={item} />
          </Link>
        ))}
      </Grid>

      {/* Render pagination */}
      <Stack py='10'  direction="row" align="center" justify="center" mt="4">
        <Button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
          colorScheme="orange"
        >
          Previous
        </Button>
        {Array.from({ length: Math.ceil(houses.length / housesPerPage) }).map((_, index) => (
          <Button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            colorScheme={currentPage === index + 1 ? 'orange' : 'gray'}
            variant={currentPage === index + 1 ? 'solid' : 'outline'}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          disabled={currentPage === Math.ceil(houses.length / housesPerPage)}
          onClick={() => paginate(currentPage + 1)}
          colorScheme='orange'
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default HouseList;

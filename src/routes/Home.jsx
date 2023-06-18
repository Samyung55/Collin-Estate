import React from 'react';
import Search from '../components/Search/Search'
import Clients from "../components/Clients/Clients"
import HouseList from '../components/Houses/HouseList'
import About from '../components/About Us/About'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'

const Home = () => {
  return (
    <>
      <Navbar />
        <Hero />
        <Clients />
        <HouseList />
        <About />
    </>
  )
}

export default Home;
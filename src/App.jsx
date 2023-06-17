import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css'
import Home from './routes/Home';
import HouseProvider from './context/HouseContext';
import { Routes, Route, Link } from 'react-router-dom';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import HouseList from './components/Houses/HouseList'
import PropertyDetails from './routes/PropertyDetails'
import { Container } from '@chakra-ui/react'
import About from './components/About Us/About'

function App() {

  return (
    <HouseProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='home' element={<Home />} />
          <Route exact path='about' element={<About />} />
          <Route exact path='property' element={<HouseList />} />
          <Route path='property-details' element={<PropertyDetails />} >
         <Route path=":propertyId" element={<HouseDetails />} />
         </Route> 
         <Route path='*' element={ <main style={{ padding: "1rem" }}><p>There's nothing here!</p><Link to='home'>Go back to home</Link></main>}
          /> 
        </Routes>
    </HouseProvider>
  )
}

export default App

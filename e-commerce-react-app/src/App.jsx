import { useState, createContext, useContext } from 'react'
import './index.css'
import NavBar from './components/Navbar'
import Slider from './components/Slider'
import Feature from './components/Feature'
import Product from './components/Product'
import Gallery from './components/Gallery'
import NewSeason from './components/NewSeason'
import Footer from './components/Footer'
import { ProductIndexProvider } from './context/ProductContext'

function App() {
  return (
    <ProductIndexProvider>
      <NavBar /> 
      <Slider />
      <Feature />
      <Product/>
      <Gallery />
      <NewSeason/>
      <Footer />
    </ProductIndexProvider>
  )
}

export default App

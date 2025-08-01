import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import Slider from './components/Slider'
import Feature from './components/Feature'
import Product from './components/Product'
import Gallery from './components/Gallery'
import NewSeason from './components/NewSeason'
import Footer from './components/Footer'

function App() {
  const [selectedIndex,setSelectedIndex]=useState(0);

  function onSelectedIndex(index){
    setSelectedIndex(index)
  }
  return (
    <>
      <NavBar onSelect={setSelectedIndex}/> 
      <Slider selectedIndex={selectedIndex}/>
      <Feature />
      <Product selectedIndex={selectedIndex}/>
      <Gallery />
      <NewSeason/>
      <Footer />
    </>
  )
}

export default App

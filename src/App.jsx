import { Route, Routes } from 'react-router';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Navbar from './components/Navbar'
import DetailPage from './components/DetailPage';
import { createContext, useState } from 'react';

export const CartContext = createContext();


function App() {

  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{cart, setCart}}>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/products/:id" element={<DetailPage/>} />
      </Routes>
    </CartContext.Provider>
  )

}

export default App;










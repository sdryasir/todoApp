import './App.css'
import Home from './components/Home';
import { useState } from 'react';

import { createContext } from 'react';


export const CartContext = createContext();//create context

function App() {

  const [cart, setCart] = useState([]);

  return (

    //provide the context
    <CartContext.Provider value={{cart, setCart}}>
      <Home/>
    </CartContext.Provider>
  )

}

export default App;










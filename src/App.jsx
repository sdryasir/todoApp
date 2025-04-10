import './App.css'

import Home from './components/Home';
import { useState } from 'react';

import { createContext } from "react";

export const ThemeContext = createContext(); //Step 1 - Create context

function App() {

  const [theme, setTheme] = useState('dark');


  return (
    //Step 2 - Provide the context
    <ThemeContext.Provider value={{theme, setTheme, a}}> 
      <Home/>
    </ThemeContext.Provider>
  )

}

export default App;










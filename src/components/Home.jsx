import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App';
import Navbar from './Navbar';

function Home() {

    const themeData = useContext(ThemeContext); //Step 3- Using the context

    


  return (
    <div style={{backgroundColor:themeData.theme === 'light'? '#fff': '#333', color:themeData.theme === 'light'? '#333': '#fff'}}>
        <Navbar/>
        <p>Home component</p>
         {themeData.theme}
    </div>
  )
}

export default Home
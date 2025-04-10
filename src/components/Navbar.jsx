import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'


function Navbar() {


    const themeData = useContext(ThemeContext);

  return (
    <div>
        <p>Navbar Component- </p>
        {themeData.theme}</div>
  )
}

export default Navbar
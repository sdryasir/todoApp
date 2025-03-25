import { useState } from "react";
import './App.css'
import Card from './components/Card';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';

import { navItems } from "./data";
import { cards } from "./data";

//props (Properties)

function App() {

 const [items, setItems] = useState(navItems);
  const [cardsData, setCardsData] = useState(cards);
 

  return (
    <div className="container">
      <Navbar items={items}/>
      <div className="row">
      {
        cardsData.map((c)=>{
          return <Card key={c.id} data={c}/>
        })
      }

      </div>
    </div>
  )

}

export default App;










/*
XML:
1 - We can create custom tags.
2 - We can specify custom props (properties/attributes)
3 - XML restrics us to provide closing of all the tags.

*/
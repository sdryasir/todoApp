import './App.css'
import { useState } from 'react';
import Modal from './components/Modal';

function App() {


  let [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = ()=>{
    setIsOpen(true);
  }
  const handleModalClose = (t)=>{
    console.log(t);
    
    setIsOpen(false);
  }

  return (
    <div>

      <button onClick={handleModalOpen}>Open Modal</button>
      {
        isOpen ? <Modal close={handleModalClose}/>  : ''
      }
    </div>
  )

}

export default App;










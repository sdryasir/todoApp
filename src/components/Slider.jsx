import React, {useState} from 'react'
import { images } from '../data';

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    };
  
    return (
      <div style={{ textAlign: "center", position: "relative", width: "600px", margin: "auto" }}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <button
          onClick={prevSlide}
          style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)" }}
        >
          &#10095;
        </button>
      </div>
    );
}

export default Slider

import { useState } from "react";
import "./App.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const App = () =>{
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  return <>
    <h1 className ="flex items-center justify-center text-center ">
        Project 1: Image Carousel
    </h1>
    <div className ="h-screen bg-green-400 flex items-center justify-center m-12 text-3xl text-center">
      
      <div className="2-2 cursor-pointer" onClick={nextSlide}>
      ⬅
      </div>
  

      <div>
        <img src={images[0]} alt="image"  />
      </div>

      <div className="2-2 cursor-pointer" onClick={nextSlide}>
      ➡
      </div>


    </div>
  </>
}

export default App;
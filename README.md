# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- import React from "react";
import { useState } from "react";
// Define the Card component outside of Portfolio for clarity
const Card = ({ title, src, index }) => {
 function handleClick(){
    handleDisplay(src, title);
  };

  return(
  <div className={`relative layer-card rounded-md `}
  onClick={()=>{
    handleClick();
  }}
  >
   {console.log(index)}
   <img className="w-full " src={src} alt={title}
   
   />
   
    <div id={index} className={`layer  absolute  left-0 right-0 bottom-0 ${index % 2 === 0 ? 'bg-teal-800' : 'bg-sky-900'} flex justify-center items-center`}
    
    >

        <i className="fa fa-plus text-8xl"></i>
    </div>
  </div>)
};

function ImageComponent({ src }) {
  return (
    <div className="layer absolute left-0 right-0 bottom-0 bg-teal-800 flex justify-center items-center">
      <img src={src} />
    </div>
  );
}



const handleDisplay = (src, title) => {
  setCurrentSrc(src); // Set the source for the image component
  setShowImage(true); // Indicate that the image component should be shown
};


// Define the CardsContainer component outside of Portfolio
const CardsContainer = () => {

  const [showImage, setShowImage] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  
  // Array representing the content of each card
  const cardsData = [
    { title: 'Card 1', src: 'src/assets/poert1.png' },
    { title: 'Card 2', src: 'src/assets/poert1.png' },
    { title: 'Card 3', src: 'src/assets/port3.png' },
    { title: 'Card 4', src: 'src/assets/port2.png' },
    { title: 'Card 5', src: 'src/assets/port2.png' },
    { title: 'Card 6', src: 'src/assets/port3.png' }
  ];

  // Return the mapped cards
  return (

    <div className="{ container mx-auto px-4  flex flex-col justify-center items-center relative">

<div> START FRAMEWORK</div>
            <div className="relative w-1/4 ">
            <span className="icon-decorator"><i className="fa fa-star"></i></span>
            </div>
   
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 gap-3">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title}src={card.src} index={index} />
      ))}
    </div>
 {showImage ? (
        <ImageComponent src={currentSrc} />
      ) : ""}
    </div>
  );
};

// Portfolio component now correctly renders the CardsContainer component
export default function Portfolio() {
  return (
    <>
    
      <CardsContainer />
    
    </>
  );
} -->
#   r e a c t - p o r t f o l i o  
 
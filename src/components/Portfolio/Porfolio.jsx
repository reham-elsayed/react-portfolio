import React from "react";
import { useState } from "react";
// Define the Card component outside of Portfolio for clarity

// Define the CardsContainer component outside of Portfolio
const CardsContainer = () => {
  const [showImage, setShowImage] = useState(false);
  const [currentSrc, setCurrentSrc] = useState("");
  function handleClick(src) {
    handleDisplay(src);
  }

  function hideLayer() {
    return setShowImage(false);
  }
  const handleDisplay = (src) => {
    setCurrentSrc(src); // Set the source for the image component
    setShowImage(true); // Indicate that the image component should be shown
  };

  function ImageComponent({ src }) {
    return (
      <div
        className="layer z-50 absolute top-0 left-0 right-0 bottom-0 bg-opacity-80 bg-black  flex justify-center items-center"
        onClick={hideLayer}
      >
        <img className="w-1/2" src={src} />
      </div>
    );
  }

  // Array representing the content of each card
  const cardsData = [
    { title: "Card 1", src: "src/assets/poert1.png" },
    { title: "Card 2", src: "src/assets/poert1.png" },
    { title: "Card 3", src: "src/assets/port3.png" },
    { title: "Card 4", src: "src/assets/port2.png" },
    { title: "Card 5", src: "src/assets/port2.png" },
    { title: "Card 6", src: "src/assets/port3.png" },
  ];

  // Return the mapped cards
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="{ container mx-auto px-4  flex flex-col justify-center items-center relative text-4xl py-5">
        <div> START FRAMEWORK</div>
        <div className="relative w-1/4 ">
          <span className="icon-decorator">
            <i className="fa fa-star"></i>
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cardsData.map((card, index) => (
            <div
              className={`relative layer-card rounded-md `}
              onClick={() => {
                handleClick(card.src);
              }}
            >
              {console.log(index)}
              <img className="w-full " src={card.src} alt={card.title} />

              <div
                id={index}
                className={`layer  absolute  left-0 right-0 bottom-0 ${index % 2 === 0 ? "bg-teal-800" : "bg-sky-900"} flex justify-center items-center`}
              >
                <i className="fa fa-plus text-8xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showImage ? <ImageComponent src={currentSrc} /> : ""}
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
}

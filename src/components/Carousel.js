import React, { useState, useEffect } from "react";
import "./styles.css";
import { CarouselWrapper } from "react-pretty-carousel";

export default function Carousel() {
  const [items, setItems] = useState(3);

  useEffect(() => {
        if (window.innerWidth < 576) 
        {
            setItems(1);
        }
        else 
        {
            setItems(3);
        }
        window.addEventListener("resize", () => {
        if (window.innerWidth < 576) 
        {
            setItems(1);
        }
        else 
        {
            setItems(3);
        }
    });
  }, []);

  return (
    <div className="Carousel">
      <h2>Photos</h2>
      <h3>Thanks for stopping by! Enjoy some of the photos I have taken on my travels.</h3>
      <CarouselWrapper items={items} mode="gallery">
        <div className="image image1"></div>
        <div className="image image2"></div>
        <div className="image image3"></div>
        <div className="image image4"></div>
        <div className="image image5"></div>
        <div className="image image6"></div>
      </CarouselWrapper>
    </div>
  );
}

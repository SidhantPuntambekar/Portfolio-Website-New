import React, { useState, useEffect } from "react";
import "./styles.css";
import badlands from '../img/badlands.jpg'
import joshuaTree from '../img/joshuaTree.JPG'
import lajolla from '../img/lajolla.JPG'
import yosemite from '../img/yosemite.jpg'
import deathvalley from '../img/deathvalley.jpg'

export default function Carousel() {
  const [items, setItems] = useState(1);

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
    // <div className="Carousel">
    //   <h2>Photos</h2>
    //   <h3>Thanks for stopping by! Enjoy some of the photos I have taken on my travels.</h3>
    //   <CarouselWrapper items={items} mode="gallery">
    //     <div className="image image1"></div>
    //     <div className="image image2"></div>
    //     <div className="image image3"></div>
    //     <div className="image image4"></div>
    //     <div className="image image5"></div>
    //     <div className="image image6"></div>
    //   </CarouselWrapper>
    // </div>

    <div className="Carousel">
      <h2>Photos</h2>
      <h3>Thanks for stopping by! Enjoy some of the photos I have taken on my travels.</h3>
      <section class="gallery">
        <div class="gallery__item">
          <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
          <img class="gallery__img" src={badlands} alt="Badlands"/>
          <label for="img-1" class="gallery__thumb"><img src={badlands} alt="Badlands"/></label>
        </div>
        <div class="gallery__item">
          <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
          <img class="gallery__img" src={joshuaTree} alt="Joshua Tree"/>
          <label for="img-2" class="gallery__thumb"><img src={joshuaTree} alt="Joshua Tree"/></label>
        </div>
        <div class="gallery__item">
          <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
          <img class="gallery__img" src={lajolla} alt="La Jolla"/>
          <label for="img-3" class="gallery__thumb"><img src={lajolla} alt="La Jolla"/></label>
        </div>
        <div class="gallery__item">
          <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
          <img class="gallery__img" src={yosemite} alt="Yosemite"/>
          <label for="img-4" class="gallery__thumb"><img src={yosemite} alt="Yosemite"/></label>
        </div>
        <div class="gallery__item">
          <input type="radio" id="img-5" name="gallery" class="gallery__selector"/>
          <img class="gallery__img" src={deathvalley} alt="Death Valley"/>
          <label for="img-5" class="gallery__thumb"><img src={deathvalley} alt="Death Valley"/></label>
        </div>
      </section>
    </div>
  );
}

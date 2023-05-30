import React, { useState, useEffect } from "react";
import "./styles.css";
import badlands from '../img/badlands.jpg'
import roxborough from '../img/roxborough.JPG'
import lajolla from '../img/lajolla.JPG'
import yosemite from '../img/yosemite.jpg'
import deathvalley from '../img/deathvalley.jpg'
import cabo from '../img/cabo.JPG'
import maui from '../img/maui.jpg'
import marienplatz from '../img/marienplatz.jpg'
import neuschwanstein from '../img/neuschwanstein.jpg'
import hallstatt from '../img/hallstatt.jpg'
import salzburg from '../img/salzburg.jpg'
import olympiastadion from '../img/olympiastadion.jpg'

const Carousel = () => {
  const style = {
    alignItems: "center",
    textAlign: "center",
    position: "relative"
  };

  return (
    <div className="container">
      <div style={style}>
        <h2>Photos</h2>
        <h3>Thanks for stopping by my website! Enjoy some of the photos I have taken on my travels.</h3>
        <section class="gallery">
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-1" name="gallery" class="gallery__selector" defaultChecked/>
            <img class="gallery__img" src={badlands} alt="Badlands"/>
            <label for="img-1" class="gallery__thumb"><img src={badlands} alt="Badlands"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={roxborough} alt="Joshua Tree"/>
            <label for="img-2" class="gallery__thumb"><img src={roxborough} alt="Roxborough"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={lajolla} alt="La Jolla"/>
            <label for="img-3" class="gallery__thumb"><img src={lajolla} alt="La Jolla"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={yosemite} alt="Yosemite"/>
            <label for="img-4" class="gallery__thumb"><img src={yosemite} alt="Yosemite"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-5" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={deathvalley} alt="Death Valley"/>
            <label for="img-5" class="gallery__thumb"><img src={deathvalley} alt="Death Valley"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-6" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={cabo} alt="Cabo San Lucas"/>
            <label for="img-6" class="gallery__thumb"><img src={cabo} alt="Cabo San Lucas"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-7" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={maui} alt="Makena Beach, Maui"/>
            <label for="img-7" class="gallery__thumb"><img src={maui} alt="Makena Beach, Maui"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-8" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={marienplatz} alt="Marienplatz, Munich"/>
            <label for="img-8" class="gallery__thumb"><img src={marienplatz} alt="Marienplatz, Munich"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-9" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={neuschwanstein} alt="Neuschwanstein Schloss"/>
            <label for="img-9" class="gallery__thumb"><img src={neuschwanstein} alt="Neuschwanstein Schloss"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-10" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={hallstatt} alt="Hallstatt"/>
            <label for="img-10" class="gallery__thumb"><img src={hallstatt} alt="Hallstat"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-11" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={olympiastadion} alt="Olympic Park, Munich"/>
            <label for="img-11" class="gallery__thumb"><img src={olympiastadion} alt="Olympic Park, Munich"/></label>
          </div>
          <div class="radio-buttons gallery__item">
            <input type="radio" id="img-12" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src={salzburg} alt="Salzburg"/>
            <label for="img-12" class="gallery__thumb"><img src={salzburg} alt="Salzburg"/></label>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Carousel
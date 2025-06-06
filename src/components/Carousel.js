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

import coronado from '../img/coronado.jpeg'
import delmorro from '../img/elmorro.jpeg'
import oldsouthchurch from '../img/oldsouthchurch.jpeg'
import boston from '../img/boston.jpeg'

import pabe_ghat from '../img/pabe_ghat.png'
import la_jolla_cove from '../img/la_jolla_cove.png'
import daytona from '../img/daytona.png'
import georgetown from '../img/georgetown.png'
import washington_monument from '../img/washington_monument.png'
import acorn_street from '../img/acorn_street.png'

const images = [
  { src: badlands, alt: "Badlands National Park, South Dakota, USA" },
  { src: roxborough, alt: "Roxborough State Park, Colorado, USA" },
  { src: lajolla, alt: "La Jolla, California, USA" },
  { src: yosemite, alt: "Yosemite National Park, California, USA" },
  { src: deathvalley, alt: "Death Valley National Park, California, USA" },
  { src: cabo, alt: "Cabo San Lucas, Baja California Sur, Mexico" },
  { src: maui, alt: "Makena Beach, Maui, Hawaii, USA" },
  { src: marienplatz, alt: "Marienplatz, Munich, Germany" },
  { src: neuschwanstein, alt: "Neuschwanstein Schloss, Schwangau, Germany" },
  { src: hallstatt, alt: "Hallstatt, Upper Austria, Austra" },
  { src: olympiastadion, alt: "Olympic Park, Munich, Germany" },
  { src: salzburg, alt: "Salzburg, Austria" },
  { src: coronado, alt: "Coronado Hotel, San Diego, California, USA" },
  { src: delmorro, alt: "Castillo San Felipe Del Morro, San Juan, Puerto Rico, USA" },
  { src: oldsouthchurch, alt: "Old South Church, Boston, Massachusetts, USA" },
  { src: boston, alt: "Old State House, Boston, Massachusetts, USA" },
  { src: pabe_ghat, alt: "Pabe Ghat, Maharashtra, India" },
  { src: la_jolla_cove, alt: "La Jolla Cove, San Diego, California, USA" },
  { src: daytona, alt: "Daytona International Speedway, Daytona, Florida, USA" },
  { src: georgetown, alt: "Healey Hall, Georgetown University, Washington DC, USA" },
  { src: washington_monument, alt: "Washington Monument, Washington DC, USA"},
  { src: acorn_street, alt: "Acorn Street, Beacon Hill, Boston, Massachusetts, USA" }
];

const Carousel = () => {
  // Random starting index
  const randomIndex = Math.floor(Math.random() * images.length);
  const [currentIndex, setCurrentIndex] = useState(randomIndex);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    setCurrentIndex(isFirst ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLast = currentIndex === images.length - 1;
    setCurrentIndex(isLast ? 0 : currentIndex + 1);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 7500); // 7500ms = 7.5 seconds

    return () => clearInterval(timer); // Clean up interval on unmount
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <h2>Photos</h2>
      <h3>Thanks for stopping by!</h3>
      <h3>Enjoy some of the photos I have taken on my travels!</h3>

      <div className="carousel">
        <button onClick={goToPrevious} className="nav-button">❮</button>

        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          className="carousel-image" 
        />

        <button onClick={goToNext} className="nav-button">❯</button>
      </div>

      <p>{images[currentIndex].alt}</p>
    </div>
  );
}

export default Carousel;
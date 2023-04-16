import React, { useState, useEffect } from "react";
import "./styles.css";

const Travel = () => {
    const style = {
        alignItems: "center",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative"
      };
    
    const mapStyle = {
        height: "550px",
        width: "675px", 
        display: "inline-block",
        overflow: "hidden"
    }
    
    const iframeStyle = {
        position: "relative",
        top: "-50px",
        border: "none"
    }

    return (
        <div style={style}>
            <h2>Travel</h2>
            <h3>Traveling is one of my favorite ways to spend time outside of work and academics. Every time I visit a new place, I'll drop a pin on the map below. My goal is to eventually visit every state in the US as well as every national park and presidential library. Internationally, I plan to travel to as many countries in the world as possible.</h3>
            <div style={mapStyle}>
                <iframe style={iframeStyle} src="https://www.google.com/maps/d/embed?mid=1rh0t5ra8Fu3X0RfWutBt41WZYL9zKNs&ehbc=2E312F" width="675" height="550"></iframe>
            </div>
        
        </div>
    );
}

export default Travel
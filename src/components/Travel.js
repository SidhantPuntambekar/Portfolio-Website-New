import React, { useState, useEffect } from "react";
import "./styles.css";

const Travel = () => {
    const style = {
        alignItems: "center",
        textAlign: "center",
        position: "relative",
    }
    
    // const mapStyle = {
    //     height: "550px",
    //     width: "675px", 
    //     display: "inline-block",
    //     overflow: "hidden",
    // }
    
    const mapStyle = {
        height: "550px",
        width: "100%", 
        display: "inline-block",
        overflow: "hidden",
        "@media (max-width: 768px)": {
            height: "550px",
            width: "675px", 
            display: "inline-block",
            overflow: "hidden",
        }
    };

    const iframeStyle = {
        position: "relative",
        top: "-75px",
        border: "none"
    }

    return (
        <div className="container">
            <div style={style}>
                <h2>Travel</h2>
                <h3>Traveling is one of my favorite ways to spend time outside of work and academics. Every time I visit a new place, I'll drop a series of pins on the map below.</h3>
                <h3>Blue pins represent overarching cities or provinces. Red pins represent famous landmarks such as national parks, monuments, or manmade structures. Yellow pins represent presidential libraries around the United States.</h3>
                <h3>My goal is to eventually visit every state in the US as well as every national park and presidential library. Internationally, I plan to travel to as many countries as possible.</h3>
                <div style={mapStyle}>
                    <iframe style={iframeStyle} src="https://www.google.com/maps/d/embed?mid=1rh0t5ra8Fu3X0RfWutBt41WZYL9zKNs&ehbc=2E312F" width="100%" height="100%"></iframe>
                </div>
            </div>
        </div>
        
    );
}

export default Travel
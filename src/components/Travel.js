import React, { useState, useEffect } from "react";
import "./styles.css";

const Travel = () => {
    const style = {
        alignItems: "center",
        textAlign: "center",
        position: "relative",
    }
    
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
                <h4>Traveling is one of my favorite ways to spend time outside of work</h4>
                <h4>Every time I visit a new place, I'll drop a series of pins on the map below</h4>
                <h4>Blue pins represent overarching cities or provinces</h4>
                <h4>Red pins represent famous landmarks (national parks, monuments, etc.)</h4>
                <h4>Yellow pins represent presidential libraries around the United States</h4>
                <h4>Follow this map to track my progress!</h4>
                <div style={mapStyle}>
                    <iframe style={iframeStyle} src="https://www.google.com/maps/d/embed?mid=1rh0t5ra8Fu3X0RfWutBt41WZYL9zKNs&ehbc=2E312F&z=2&ll=33.7127, -38.0059" width="100%" height="100%"></iframe>
                </div>
            </div>
        </div>
        
    );
}

export default Travel
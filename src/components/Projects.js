import React from 'react'
import { useState } from 'react'
import App from '../App.js'

const Project = (props) => {

    var image = require('../img/' + props.project.imgFileName)

    const style = {

        height: "200px",
        width: "90%",
        overflow: 'hidden',
        color: "white",
        backgroundColor: props.project.accentColor,
        borderRadius: "15px",
        boxShadow: "0 6px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        marginLeft: "25px",
        textAlign: "left",
        position : "relative",
        marginBottom: "36px",
        cursor: "pointer"
    }

    const overlayStyle = {

        zIndex: "150",
        position: "absolute",
        paddingTop: props.project.verticalOffset,
        paddingLeft: "35px",
        paddingRight: "35px",
        paddingBottom : "35px",
        textAlign: 'center'
    }

    return (
        <div style = {style} onClick ={() => {
            props.setTrigger(true)
            props.setIndex(props.project)
        }}>
            <a href={props.project.link} target="_blank"
              rel="noreferrer"><div style = {overlayStyle}>
                <h3>{props.project.title}</h3>
                <h4>{props.project.dates}</h4>
            </div>
            <img src = {image.default} style = {{marginLeft : 'auto', marginRight: 'auto', display: 'block', maxWidth: '100%', minHeight: '100%', position: 'absolute', opacity: '44%', zIndex: '2'}} /></a>
            
        </div>
    )
}

export default Project
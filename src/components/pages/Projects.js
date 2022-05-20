import React from "react";
import data from "../../res/info.json";
import Project from "../Projects.js";

const Projects = ( props ) => {
  const projects = data.projects;
  
  const style = {
    alignItems: "center",
    textAlign: "center",
    padding: "15%",
  };

  const projectStyle = 
  {
    display: "inline-table",
    marginTop: "20px",
    marginBottom: "20px",
    marginRight: "20px",
    marginLeft: "20px"
  }

  var oneCol = []
  var twoCol = []
  var threeCol = []
  var fourCol = []

  for (var i = 0; i < projects.length; i++) 
  {
    if (i % 4 === 0) 
    {
      oneCol.push(projects[i]);
    }

    if (i % 4 === 1) 
    {
      twoCol.push(projects[i]);
    }

    if (i % 4 === 2)
    {
      threeCol.push(projects[i]);
    }

    if (i % 4 === 3)
    {
      fourCol.push(projects[i]);
    }
  }

  return (
    <div style = {style}>
      <div>
        <h2 >Projects</h2>  
      </div>
      <div style={{ display: "grid-flex", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 5 }}>
          <div style={projectStyle}>
              {oneCol.map((project, x) => (
                <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
              ))} 
          </div> 
          <div style={projectStyle}> 
              {twoCol.map((project, x) => (
                <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
              ))} 
          </div>  
          <div style={projectStyle}>
              {threeCol.map((project, x) => (
                <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
              ))} 
          </div>  
          <div style={projectStyle}>
              {fourCol.map((project, x) => (
                <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
              ))} 
          </div>   
        </div>
    </div>
  )
};

export default Projects;
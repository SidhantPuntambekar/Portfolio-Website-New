import React from "react";
import data from "../../res/info.json";
import Project from "../Projects.js";

const Projects = ( props ) => {
  const projects = data.projects;
  
  const style = {
    alignItems: "center",
    textAlign: "center"
  };

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
        <h2>Projects</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 5 }}>
            <div>
                {oneCol.map((project, x) => (
                  <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
                ))} 
            </div> 
            <div>
                {twoCol.map((project, x) => (
                  <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
                ))} 
            </div>  
            <div>
                {threeCol.map((project, x) => (
                  <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
                ))} 
            </div>  
            <div>
                {fourCol.map((project, x) => (
                  <Project project = {project} trigger = {props.trigger} setTrigger = {props.setTrigger} index = {props.index} setIndex = {props.setIndex}/>
                ))} 
            </div>    
        </div>
    </div>
  )
};

export default Projects;
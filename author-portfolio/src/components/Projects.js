import React from 'react';
import PROJECTS from '../data/projects';

const Project = props =>{
     const{title, image, description, link} = props.project;

    return(
        <div style={{display: 'inline-block', width: 300, marign: 10}}>
            <a href={link}>
                <h3>{title}</h3>
                <img src ={image} alt='projects' style={{width: 200, height: 120}}/>
                <p>{description}</p>
           </a>
        </div>
    )
}

const Projects = () => (
    <div>
        <h2>Chaotic Endeavors</h2>
        <div>
            {
                PROJECTS.map(PROJECT =>(
                    <Project key = {PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)


export default Projects;
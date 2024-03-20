import React from "react";
import moodifyScreenshot from '../assets/Moodify Screenshot.png';
import outdoorScreenshot from '../assets/Outdoor adventures screenshot.png'
import libraryScreenshot from '../assets/Screenshot 2024-03-20 012203.png'
import notesScreenshot from '../assets/Wired-notes screenshot.png'
const projectData = [
    {
      title: 'Outdoor Adventures',
      imageSrc: outdoorScreenshot,
      deployedUrl: 'https://evanrc.github.io/Outdoor-Adventures/',
      repoUrl: 'https://github.com/EvanRC/Outdoor-Adventures',
    },
    {
      title: 'Wired Library',
      imageSrc: libraryScreenshot,
      deployedUrl: 'https://wired-library.onrender.com/',
      repoUrl: 'https://github.com/EvanRC/wired-library',
    },
    {
      title: 'Moodify',
      imageSrc: moodifyScreenshot,
      deployedUrl: 'https://moodify-s7yr.onrender.com/',
      repoUrl: 'https://github.com/EvanRC/Moodify',
    },
    {
      title: 'Wired Social',
      imageSrc: 'path/to/image-two.jpg',
      repoUrl: 'https://github.com/EvanRC/wired-social',
    },
    {
      title: 'Wired ReadMe Generator',
      imageSrc: 'path/to/image-two.jpg',
      repoUrl: 'https://github.com/EvanRC/Wired-ReadME-Generator',
    },
    {
      title: 'Wired Notes',
      imageSrc: notesScreenshot,
      deployedUrl: 'https://wirednotes-591ce7420307.herokuapp.com/notes',
      repoUrl: 'https://github.com/EvanRC/Wired-Notes',
    },
  
  ];
  
  const Project = ({ title, imageSrc, deployedUrl, repoUrl }) => {
    return (
      <div className="project">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        {deployedUrl && <a href={deployedUrl}>Deployed App</a>}
        {repoUrl && <a href={repoUrl}>GitHub Repo</a>}
      </div>
    );
  };

  const Portfolio = () => {
    return (
      <section className="portfolio-container">
        {projectData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            deployedUrl={project.deployedUrl}
            repoUrl={project.repoUrl}
          />
        ))}
      </section>
    );
  }; 

export default Portfolio;
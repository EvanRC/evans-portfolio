import React from "react";

const projectData = [
    {
      title: 'Outdoor Adventures',
      imageSrc: 'path/to/image-one.jpg',
      deployedUrl: 'https://evanrc.github.io/Outdoor-Adventures/',
      repoUrl: 'https://github.com/EvanRC/Outdoor-Adventures',
    },
    {
      title: 'Wired Library',
      imageSrc: 'path/to/image-two.jpg',
      deployedUrl: 'https://wired-library.onrender.com/',
      repoUrl: 'https://github.com/EvanRC/wired-library',
    },
    {
      title: 'Moodify',
      imageSrc: 'path/to/image-two.jpg',
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
      imageSrc: 'path/to/image-two.jpg',
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
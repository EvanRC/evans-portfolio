import React from "react";

const Project = ({ title, imageSrc, deployedUrl, repoUrl }) => {
    return (
        <div>
            <img src={imageSrc} alt= {title} />
            <h3>{title}</h3>
            <a href={deployedUrl}>Deployed App</a>
            <a href={repoUrl}>Github Repo</a>
        </div>
    );
};

export default Project;
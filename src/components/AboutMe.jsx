import React from "react";
import profilePic from '../assets/1000000835.jpg';


const AboutMe = () => {
    return (
        <div className="about-me">
            <div id="profile">
                <img src= {profilePic} id="p-pic" alt="Profile" />
            </div>
            <p>Hi I'm Evan, A junior web developer newly graduated from UC Davis's Coding Bootcamp. I am trained in full stack web-development but currently enjoy the creativity that comes with front-end work.
                Please stay a while and browse what projects I have to show currently.</p>
          
        </div>
    );
};

export default AboutMe;
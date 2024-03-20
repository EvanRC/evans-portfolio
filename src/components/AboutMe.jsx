import React from "react";
import profilePic from '../assets/1000000835.jpg';


const AboutMe = () => {
    return (
        <div className="about-me">
            <div id="profile">
                <img src= {profilePic} id="p-pic" />
            </div>
            <p>Hi I'm Evan, A junior web developer newly graduated from UC Davis's Coding Bootcamp. I am trained in full stack web-development but currently enjoy the creativity that comes with front-end work.
                Please stay a while and browse what projects I have to show currently.</p>
            <p>Outside of coding I am an avid gamer. I have a special love for The Halo and Elder Scrolls series. You might also find me at the billiards hall or on top of the mountain snowboarding depending on
                the day of the week or time of year.</p>
        </div>
    );
};

export default AboutMe;
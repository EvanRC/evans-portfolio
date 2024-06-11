import React from 'react';

const Resume = () => {
    const skills = ['HTML5', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MySQL', 'MongDB']; // Add or remove skills
    const educations = [
        {
            institution: 'UC Davis Coding Bootcamp',
            Certification: 'Full Stack Web Developer',
            year: 'April 2024',
        },

    ];

    return (
        <section className='resume'>
            <h2>Resume</h2>
            
            <h3>Skills</h3>
            <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            
            <h3>Education</h3>
            {educations.map((education, index) => (
                <div key={index}>
                    <h4>{education.institution}</h4>
                    <p>{education.degree} - {education.year}</p>
                </div>
            ))}

            <a href="path-to-your-resume.pdf" download="YourName_Resume.pdf" id="resumeDL">
                Download Resume
            </a>
        </section>
    );
};

export default Resume;
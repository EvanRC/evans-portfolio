import React from "react";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Evan Carlson. All rights reserved.</p>
            <div className="footer"> 
                <a href="https://www.linkedin.com/in/evan-carlson-34a45021a/">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/EvanRC">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
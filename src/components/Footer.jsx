import React from "react";

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Evan Carlson. All rights reserved.</p>
            <div>
                <a href="https://www.linkedin.com/in/evan-carlson-34a45021a/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/EvanRC">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
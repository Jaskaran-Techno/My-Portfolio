import React from 'react';
import {faFacebook, faInstagram, faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Jaskaran Singh.</span>
                </h1>
                <p className="h-sub-text">
                    A full stack developer, a keen learner & Tech enhthusiast taking MERN stack as my major. Fascinated towards
                    Penetration Testing & Data Science, I build modern interactive React UI components for better application
                    performance.
                </p>
                <div className="icons">
                    <Link to="https://www.facebook.com/profile.php?id=100041770744715" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="https://www.instagram.com/jaskarans_.ingh/?hl=en" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon in" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/jaskaran-techno/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ln" />
                    </Link>
                    <Link to="https://twitter.com/mejaskaransingh" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw" />

                    <Link to="https://github.com/Jaskaran-Techno" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    </Link>
                    
                </div>
            </header>
        </div>
    )
}

export default HomePage;

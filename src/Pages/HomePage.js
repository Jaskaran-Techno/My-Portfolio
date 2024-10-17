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
                I'm a self-taught Full Stack Developer, Fascinated towards Application Development, development defines me well, technology makes me sensical, because of this I am able to leverage both my formal education as well as my experience as a self-taught developer to create the most comprehensive and easy applications for you. I'm currently working for Accenture as a Software Engineer.
                </p>
                <div className="icons">
                    <Link to="https://www.facebook.com/profile.php?id=100041770744715" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="https://www.instagram.com/jaskaran_singhhhhhh/?hl=en" className="icon-holder">
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

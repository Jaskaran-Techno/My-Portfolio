import React from 'react';
import about from '../img/profile-pic.png';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Jaskaran Singh</span></h4>
                <p className="about-text">
                    I'm a Full Stack Developer, expertise with measuring skills JavaScript, React.js, MongoDB, Node.js ,development defines me well, Technology makes me sensical , I'm currently looking for
                    full time job opportunities to serve as a Software Engineer or an Intern.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Jaskaran Singh</p>
                        <p>: 22</p>
                        <p>: Indian</p>
                        <p>: English</p>
                        <p>:  Modinagar, Ghaziabad, Uttar Pradesh</p>
                        <p>: India</p>
                    </div>
                </div>
                <button to="https://drive.google.com/file/d/1Qdu1WtYGXfUorDBcEE8zrgfiMkDKcsNE/view?usp=sharing"
                    className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;

import React from 'react';
import about from '../img/my pic.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Jaskaran Singh</span></h4>
                <p className="about-text">
                    I'm a Full Stack Developer, Technology excites me, development explains me, I'm currently looking for
                    full time job opportunities to serve as a Software Development Engineer or an Intern.
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
                        <p>: 21</p>
                        <p>: Indian</p>
                        <p>: English</p>
                        <p>: Sanjeevani Estate, Flat No. 124-B, Sikri, Modinagar, Ghaziabad</p>
                        <p>: India</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;

import React from 'react';
import logo from "../../images/LOGO.png"

const SideBare = () => {
    return (
        <div className="sideBare">

            <div className="sideBare_wrapper">

                <img className="sideBare_logo" src={logo.src} alt="logo" />

                <nav className="nav">

                    <a className="sideBare_link" href="#">Home</a>
                    <a className="sideBare_link" href="#">About</a>
                    <a className="sideBare_link" href="#">Values</a>
                    <a className="sideBare_link" href="#">Project start</a>
                    <a className="sideBare_link" href="#">Services</a>
                    <a className="sideBare_link" href="#">Portfolio</a>
                    <a className="sideBare_link" href="#">Contact</a>

                </nav>

                <div className="contacts">

                    <img src="" alt="telegram" />
                    <img src="" alt="whatsApp" />
                    <img src="" alt="FaceBook" />

                </div>

            </div>

        </div>
    );
};

export default SideBare;
import React from 'react';
import logo from "../../images/LOGO.png"
import telegram from "../../images/Vector.png"
import whatsApp from "../../images/wh.png"
import faceBook from "../../images/fb.png"

const SideBare = () => {

    return (
        <div className="sideBare">

            <div className="sideBare_wrapper">

                <div className="logo">
                    <img className="sideBare_logo" src={logo.src} alt="logo" />
                </div>

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

                    <a href="">
                        <img className="sideBare_contacts" src={telegram.src} alt="telegram" />
                    </a>

                    <a href="">
                        <img className="sideBare_contacts" src={whatsApp.src} alt="whatsApp" />
                    </a>

                    <a href="">
                        <img className="sideBare_contacts" src={faceBook.src} alt="FaceBook" />
                    </a>

                </div>

            </div>

        </div>
    );
};

export default SideBare;
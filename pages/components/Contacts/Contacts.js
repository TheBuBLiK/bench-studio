import add from "../../../images/Vector.svg";
import call from "../../../images/Vector (1).svg";
import email from "../../../images/Vector (2).svg";
import open from "../../../images/ant-design_clock-circle-outlined.svg";
const Contacts = () => {
    return (
        <div className="contacts">
            <h3 className="contacts__title white">Contact us</h3>
            <div className="contacts__wrapper">
                <div className="contacts__item">
                    <div className="contacts__logo">
                        <img src={add.src} />
                    </div>
                    <div className="contacts__desc">
                        <h3 className="contacts__title_mini white">Address</h3>
                        <p className="contacts__info white">
                            4 th icrodistrict 2/1
                        </p>
                        <p className="contacts__info white">
                            Bichkek, Kyrgyzstan
                        </p>
                    </div>
                </div>
                <div className="contacts__item">
                    <div className="contacts__logo">
                        <img src={call.src} />
                    </div>
                    <div className="contacts__desc">
                        <h3 className="contacts__title_mini white">Call us</h3>
                        <p className="contacts__info white">
                            +996 774 15 65 33
                        </p>
                        <p className="contacts__info white">
                            +996 222 15 65 33
                        </p>
                    </div>
                </div>
                <div className="contacts__item">
                    <div className="contacts__logo">
                        <img src={email.src} />
                    </div>
                    <div className="contacts__desc">
                        <h3 className="contacts__title_mini white">Email us</h3>
                        <p className="contacts__info white">
                            benchsoft@gmail.com
                        </p>
                    </div>
                </div>
                <div className="contacts__item">
                    <div className="contacts__logo">
                        <img src={open.src} />
                    </div>
                    <div className="contacts__desc">
                        <h3 className="contacts__title_mini white">
                            Open hours
                        </h3>
                        <p className="contacts__info white">Monday-Friday</p>
                        <p className="contacts__info white">9:00AM - 05:00PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;

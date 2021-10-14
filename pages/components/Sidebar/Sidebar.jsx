import asd from "../../../images/LOGO.svg";
const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar_fixed">
                    <div className="sidebar__logo">
                        <img src={asd.src} alt="logo" style={{margin:"0 auto"}} />
                    </div>
                    <div className="sidebar__list">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Values</a>
                            </li>
                            <li>
                                <a href="#">Project start</a>
                            </li>
                            <li>
                                <a href="#contacts">Services</a>
                            </li>
                            <li>
                                <a href="#contacts">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contacts">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar__icons">
                        <img src="/" />
                        <img src="/" />
                        <img src="/" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;

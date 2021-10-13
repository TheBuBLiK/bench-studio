import asd from "../../../public/LOGO.svg";
const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="sidebar__wrapper">
                <div className="sidebar__logo">
                    <img src={asd.src} alt="logo" />
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
        </nav>
    );
};

export default Sidebar;

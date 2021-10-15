import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Modern from "../Modern/Modern";
import Services from "../Services/Services";

const Content = () => {
    return (
        <div className="content-container">
            <About />
            <Modern />
            <Services />
            <Contacts />
        </div>
    );
};

export default Content;

import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import Modern from "../Modern/Modern";
import Services from "../Services/Services";
import Values from "../Values/Values";
import ProjectStarts from "../ProjectStarts/ProjectStarts";

const Content = () => {
    return (
        <div className="content-container">
            <About />
            <Values />
            <ProjectStarts />
            <Modern />
            <Services />
            <Contacts />
        </div>
    );
};

export default Content;

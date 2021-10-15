import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import Values from "../Values/Values";
import ProjectStarts from "../ProjectStarts/ProjectStarts";

const Content = () => {
  return (
    <div className="content-container">
      <About />
      <Values />
      <ProjectStarts />
      <Contacts />
    </div>
  );
};

export default Content;

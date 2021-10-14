import Contacts from "../Contacts/Contacts";
import Main from "../Main/Main";
import About from "../About/About";

const Content = () => {
  return (
    <div className="content-container">
      <Main />
      <About />
      <Contacts />
    </div>
  );
};

export default Content;

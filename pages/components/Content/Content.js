import Contacts from "../Contacts/Contacts";
import Features from "../Features/Features";
import Main from "../Main/Main";
import Moscow36 from "../Moscow36/Moscow36";
import Planning from "../Planning/Planning";

const Content = () => {
    return (
        <div className="content-container">
            <Main />
            <Moscow36 />
            <Planning />
            <Features />
            <Contacts />
        </div>
    );
};

export default Content;

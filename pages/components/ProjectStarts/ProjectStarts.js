
import comp from "../../../images/projectimg.svg";
const ProjectStarts = () => {
  return (
    <div className="project__container">
      <div className="project__wrapper">
        <p className="block-title white">Quick project start</p>
        <div className="project__bottom">
          <div className="project__left">
            <div className="project__blocks">
              <p className="inblock-title project__blocks_title red">Contact</p>
              <p className="inblock-text project__blocks_text white">
                Submit your project request or project idea to us.
              </p>
            </div>
            <div className="project__blocks">
              <p className="inblock-title project__blocks_title red">
                Analysis
              </p>
              <p className="inblock-text project__blocks_text white">
                We will contact you to clarify your project requirements.
              </p>
            </div>
            <div className="project__blocks">
              <p className="inblock-title project__blocks_title red">
                Proposal
              </p>
              <p className="inblock-text project__blocks_text white">
                We will provide you with our free, non-binding bid or a tailored
                proposal.
              </p>
            </div>
            <div className="project__blocks">
              <p className="inblock-title project__blocks_title red">Start</p>
              <p className="inblock-text project__blocks_text white">
                We will assemble and prepare a team and start the project work
              </p>
            </div>
          </div>
          <div className="project__right">
            <img src={comp.src} alt="project-comp" className="project__img" />
          </div>
        </div>
      </div>
    </div>
  );

};

export default ProjectStarts;

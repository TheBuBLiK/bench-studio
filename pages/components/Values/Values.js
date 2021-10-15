import valfir from "../../../images/valfir.svg";
import valsec from "../../../images/valsec.svg";
import valthir from "../../../images/valthir.svg";
const Values = () => {
  return (
    <div className="val__container">
      <div className="val__wrapper">
        <p className="block-title white">Our values</p>
        <div className="val__content">
          <div className="val__blocks">
            <img src={valfir.src} alt="first_block" />
            <p className="inblock-title val__blocks_title white">
              Product development from scratch
            </p>
            <p className="inblock-text white">
              Initial analysis and risk accounting.
            </p>
          </div>
          <div className="val__blocks">
            <img src={valsec.src} alt="second_block" />
            <p className="inblock-title val__blocks_title white">
              Full reporting
            </p>
            <p className="inblock-text white">
              Full and clear documentation for your product
            </p>
          </div>
          <div className="val__blocks">
            <img src={valthir.src} alt="third_block" />
            <p className="inblock-title val__blocks_title white">
              MVP development
            </p>
            <p className="inblock-text white">
              Quick launch of project. We use Agile and Scrum for better and
              fast development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;

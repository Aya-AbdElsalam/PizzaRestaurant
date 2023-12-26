import "../component/Clients.css";
import {
  faChartLine,
  faHeart,
  faUser,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  return (
    <div className="clients-section position-relative text-white">
      <div className="overlay w-100 h-100 bg-dark opacity-50 position-absolute z-0"></div>
      <div className="container d-flex justify-content-evenly text-center flex-wrap align-content-center z-1 position-relative text-white">
        <div className="mb-5 mt-5">
          <i>
            <FontAwesomeIcon icon={faChartLine} />
          </i>
          <h1 data-val="105" className="fw-bolder">
            105
          </h1>
          <h3>Ingredients</h3>
        </div>
        <div className="mb-5  mt-5">
          <i>
            <FontAwesomeIcon icon={faUser} />
          </i>
          <h1 data-val="600" className="fw-bolder">
            600
          </h1>
          <h3>Clients Daily</h3>
        </div>
        <div className="mb-5  mt-5">
          <i>
            <FontAwesomeIcon icon={faShieldHeart} />
          </i>
          <h1 data-val="50" className="fw-bolder">
            50
          </h1>
          <h3>Years of Experience</h3>
        </div>
        <div className="mb-5  mt-5">
          <i>
            <FontAwesomeIcon icon={faHeart} />
          </i>
          <h1 data-val="100" className="fw-bolder">
            100
          </h1>
          <h3>Fresh & Halal</h3>
        </div>
      </div>
    </div>
  );
}

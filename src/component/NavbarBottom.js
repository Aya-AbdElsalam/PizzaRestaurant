import "../component/NavbarBottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
export default function NavbarBottom() {
  return (
    <div className="Nav-bottom border-bottom border-5 border-white">
      <ul className="nav justify-content-center  align-content-center h-100">
        <li className="nav-item me-3">
          <i>
            <FontAwesomeIcon icon={faPhoneVolume} />
          </i>
        </li>
        <li className="nav-item  me-1">
          <span className="fw-bold">HOT LINE:</span>
        </li>
        <li className="nav-item  fw-bold">
          <span>+035269</span>
        </li>
      </ul>
    </div>
  );
}

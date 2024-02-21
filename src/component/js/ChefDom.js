import "../css/ChefDom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function ChefDom(props) {
  return (
    <div
      className="position-relative chef col-md-4"
      style={{ height: "360px" }}
      key={props.chef.id}
    >
      <Link
        to={`../team/${props.chef.id}/${props.chef.name}`}
        aria-label={`go to details of ched ${props.chef.name}`}
      >
        <img
          width="140"
          height="140"
          className="h-100 w-100 cursor-pointer"
          alt=""
          src={props.chef.img}
        ></img>
      </Link>
      <div className="position-absolute w-100 p-3 py-5 info">
        <h4 className="fw-bold">{props.chef.name}</h4>
        <p>{props.chef.jop}</p>
        <ul className=" d-flex  justify-content-evenly ">
          <li className="list-group-item fs-5 cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} />
          </li>
          <li className="list-group-item fs-5 cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li className="list-group-item fs-5 cursor-pointer">
            <FontAwesomeIcon icon={faPinterestP} />
          </li>
          <li className="list-group-item fs-5 cursor-pointer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </li>
        </ul>
      </div>
    </div>
  );
}

import "../css/GetDelivery.css";
import del from "../../images/del.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default function GetDelivery() {
  return (
    <div className="getDelivery w-100  mb-5 g-2">
      <div className=" m-5 row text-center position-relative     align-items-center">
        <div className="position-absolute w-100 h-75 bg"></div>
        <div className="img d-inline-block col-md-4 position-relative">
          <img
            src={del}
            alt=""
            className="h-100"
            width="366"
            height="160"
          ></img>
        </div>
        <div className="  col-md-7 container pt-5 position-relative">
          <h2
            className="fw-bolder rounded-pill"
            style={{
              color: "var(--main--color)",
            }}
          >
            Get Free Delivery!
          </h2>
          <button
            aria-label="call +123666604"
            className="p-3 text-center fw-bold fs-4 rounded-pill  text-white"
            style={{ background: "var(--main--color)" }}
          >
            <span className="me-3">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            Call: +123666604
          </button>
        </div>
      </div>
    </div>
  );
}

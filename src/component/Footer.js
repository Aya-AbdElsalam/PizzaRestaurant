import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { filterProducts } from "../rtk/slices/products";
import "../component/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
export default function Footer() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.querySelector(
      ".footer-bottom"
    ).innerHTML = `Created with love by Aya ©${new Date().getFullYear()}`;
  }, []);
  return (
    <div className="footer position-relative mt-5 overflow-hidden bg-black">
      <div className="position-absolute w-100 h-100 BG "></div>
      <div className="container overflow-hidden    position-relative">
        <div className="footer-top row pt-5 pb-4 justify-content-center column-gap-5  ms-5 ms-lg-0">
          <div className="col-lg-4 ">
            <h4 className="mb-4 mt-3 fw-bold text-white text-center text-lg-start">
              Follow US
            </h4>
            <ul className=" row  justify-content-center gap-3 m-0 p-0 mt-4 text-center social">
              <li className="list-group-item fs-5 text-white rounded-circle">
                <i className="fs-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </i>
              </li>
              <li className="list-group-item fs-5 text-white rounded-circle">
                <i className="fs-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </i>
              </li>
              <li className="list-group-item fs-5 text-white rounded-circle">
                <i className="fs-3">
                  <FontAwesomeIcon icon={faPinterestP} />
                </i>
              </li>
              <li className="list-group-item fs-5 text-white rounded-circle">
                <i className="fs-3">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
              </li>
            </ul>
          </div>
          <div className="col-lg  text-white ">
            <h4 className="mb-4 mt-3 fw-bold text-white">Hot Menu</h4>
            <ul className="p-0 m-0 ">
              <li className="list-group-item ">
                <Link
                  className="text-decoration-none text-white"
                  onClick={() => {
                    dispatch(filterProducts("pizza"));
                  }}
                  to={"menu"}
                >
                  <i>
                    <FontAwesomeIcon icon={faCaretRight} />
                  </i>
                  <p className="d-inline-block ms-2">Pizza</p>
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  className="text-decoration-none text-white"
                  onClick={() => {
                    dispatch(filterProducts("sweets"));
                  }}
                  to={"menu"}
                >
                  <i>
                    <FontAwesomeIcon icon={faCaretRight} />
                  </i>
                  <p className="d-inline-block ms-2">Sweets</p>
                </Link>
              </li>
              <li className="list-group-item">
                <Link
                  className="text-decoration-none text-white"
                  onClick={() => {
                    dispatch(filterProducts("drinks"));
                  }}
                  to={"menu"}
                >
                  <i>
                    <FontAwesomeIcon icon={faCaretRight} />
                  </i>
                  <p className="d-inline-block ms-2">Drinks</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg  text-white ">
            <h4 className="mb-4 mt-3 fw-bold text-white">Opening Hours</h4>
            <ul className="p-0 m-0">
              <li className="list-group-item">
                <i>
                  <FontAwesomeIcon icon={faCaretRight} />
                </i>
                <p className="d-inline-block ps-2" style={{ color: "#bfbfbf" }}>
                  Monday:
                </p>
                <span> 10.00am - 05.00pm</span>
              </li>
              <li className="list-group-item">
                <i>
                  <FontAwesomeIcon icon={faCaretRight} />
                </i>
                <p style={{ color: "#bfbfbf" }} className="d-inline-block ps-2">
                  Tuesday:
                </p>
                <span> 10.20am - 05.30pm</span>
              </li>
              <li className="list-group-item">
                <i>
                  <FontAwesomeIcon icon={faCaretRight} />
                </i>
                <p className="d-inline-block ps-2" style={{ color: "#bfbfbf" }}>
                  Wednesday:
                </p>
                <span> 10.30am - 05.50pm</span>
              </li>
              <li className="list-group-item">
                <i>
                  <FontAwesomeIcon icon={faCaretRight} />
                </i>
                <p className="d-inline-block ps-2" style={{ color: "#bfbfbf" }}>
                  Thursday:
                </p>
                <span> 11.00am - 07.10pm</span>
              </li>
              <li className="list-group-item">
                <i>
                  <FontAwesomeIcon icon={faCaretRight} />
                </i>
                <p className="d-inline-block ps-2" style={{ color: "#bfbfbf" }}>
                  Friday:
                </p>
                <span style={{ color: "var(--second--color)" }}> Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-white text-center fw-bold pb-5 position-relative">
          Created with love by Aya
        </div>
      </div>
    </div>
  );
}

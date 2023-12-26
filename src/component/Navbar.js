import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../component/Navbar.css";
import { useSelector } from "react-redux";
export default function Navbar() {
  var CartItems = useSelector((state) => {
    return state.Cart.cartItems;
  });
  return (
    <nav className="navbar  fixed-top navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ height: "65px" }} />
        </Link>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav  pe-3 flex-grow-1 fw-bold justify-content-center">
              {/* home */}
              <li className="nav-item ms-3 ">
                <Link className="nav-link active" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              {/* menu */}
              <li className="nav-item ms-3 ">
                <Link className="nav-link" to="menu">
                  MENU
                </Link>
              </li>
              {/* about us */}
              <li className="nav-item ms-3 ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="aboutUs"
                >
                  ABOUT US
                </Link>
              </li>
              {/* gallery */}
              <li className="nav-item ms-3 ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="gallery"
                >
                  GALLERY
                </Link>
              </li>
              {/* team */}
              <li className="nav-item ms-3 ">
                <Link className="nav-link" to="team">
                  OUR TEAM
                </Link>
              </li>
              {/* events */}
              <li className="nav-item ms-3 ">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="events"
                >
                  EVENTS
                </Link>
              </li>
              {/* CONTACT */}
              <li className="nav-item ms-3 ">
                <Link className="nav-link" to="contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="cart position-relative text-center">
          <span className="rounded-circle  fw-bold position-absolute  text-align-center">
            {CartItems.length}
          </span>
          <Link to={"cart"}>
            <i className="rounded-circle cursor-pointer d-inline-block text-white text-align-center">
              <FontAwesomeIcon icon={faCartShopping} />
            </i>
          </Link>
          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

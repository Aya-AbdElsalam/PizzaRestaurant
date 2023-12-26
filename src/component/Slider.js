import { Link } from "react-router-dom";
import "../component/Slider.css";
export default function Slider() {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide overflow-hidden slider-landingPage"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner h-100">
        <div className="carousel-item slide1 active ">
          <div className="info  p-5">
            <p className="fw-bold">BIG ITALIAN</p>
            <p className="fw-bold p-3 rounded-4">CHEES PIZZA </p>
            <Link to={"menu"}>
              <button
                type="button"
                className="btn btn-light fw-bold position-relative shop"
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item slide2 ">
          <div className="info  p-5">
            <p className="fw-bold">Special Drinks</p>
            <p className="fw-bold p-3">FRESH DRINKS </p>
            <Link to={"menu"}>
              <button
                type="button"
                className="btn btn-light fw-bold position-relative shop"
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item slide3 ">
          <div className="info  p-5">
            <p className="fw-bold">Special Dessert</p>
            <p className="fw-bold p-3">Very delicious </p>
            <Link to={"menu"}>
              <button
                type="button"
                className="btn btn-light fw-bold position-relative shop"
              >
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev align-items-end mb-5 opacity-100"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span
          className="control carousel-control-prev-icon rounded-circle p-4"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next align-items-end mb-5 opacity-100"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span
          className="control carousel-control-next-icon rounded-circle p-4"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

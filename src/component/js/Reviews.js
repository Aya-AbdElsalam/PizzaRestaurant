import "../css/Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import curvedLine from "../../images/curvedLine.webp";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export default function Reviews() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide reviews mb-5 mt-5"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <div className="carousel-caption d-md-block">
            <i className="fs-1 d-block">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </i>
            <p className="fst-italic fs-4">
              “ Make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining esmake a type specimen book. It has survived not
              electronic “
            </p>
            <img src={curvedLine} alt="" width="140" height="20" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Mike Hussy</p>
            <p> CEO, PsdBoss</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <div className="carousel-caption  d-md-block">
            <i className="d-block">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </i>
            <p className="fst-italic fs-4">
              “ Make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining esmake a type specimen book. It has survived not
              electronic “
            </p>
            <img src={curvedLine} alt="" width="140" height="20" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Jenifar Willy
            </p>
            <p> CEO, PsdBoss</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-caption  d-md-block">
            <i className="d-block">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </i>
            <p className="fst-italic fs-4">
              “ Make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining esmake a type specimen book. It has survived not
              electronic “
            </p>
            <img src={curvedLine} alt="" width="140" height="20" />
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Jenifar Jenny
            </p>
            <p> CEO, PsdBoss</p>
          </div>
        </div>
      </div>
      <button
        aria-label="previous"
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        aria-label="next"
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

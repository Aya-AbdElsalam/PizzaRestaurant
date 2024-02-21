import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
import { useParams } from "react-router-dom";
import { EventsData } from "../../data/EventsData";
import location from "../../images/eventLocation.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Category from "../../component/js/Category";
import LandingSection from "../../component/js/LandingSection";
export default function EventDetails() {
  const params = useParams();
  //find the selected event
  const event = EventsData.find((e) => {
    return +e.id === +params.id;
  });
  function scrolling() {
    const carousel = document.querySelector(".lg-react-element");
    const firstCardWidth = carousel.querySelector(
      ".lg-react-element img"
    ).offsetWidth;
    const carouselChildrens = [...carousel.children];
    // get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // insert copies of the last few cards to beginning of carousel
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
      });

    // insert copies of the first few cards to end of carousel
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });
    // add event listeners for the arrow buttons to scroll the carousel left and right
    document.querySelectorAll(".control i").forEach((btn) => {
      btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.classList.contains("left")
          ? -firstCardWidth
          : firstCardWidth;
      });
    });
  }
  return (
    <>
      <LandingSection title={`Events/ ${event.title}`}></LandingSection>
      <div className="container">
        <div className="Event-details-section row column-gap-5 ">
          <div className="col-lg-8      overflow-hidden">
            <div className="img">
              <img src={event.img} alt={event.title} className="w-100"></img>
            </div>
            <h4 className="fw-bold border-0 mb-3">{event.title}</h4>
            <p>{event.describtion}</p>
            <div className="row justify-content-end mt-5 mb-5">
              <div className="col-md-5">
                <img
                  width="640"
                  height="160"
                  src={location}
                  alt="location"
                  className="w-100 h-100 rounded "
                ></img>
              </div>
              <div className="col-md-6 location ">
                <h4 className="fw-bold">Event Location</h4>
                <p className="mt-3">{event.locationDescribtion}</p>
                <p className="mb-2 fw-semibold">
                  <i className="me-2 " style={{ color: "var(--main--color)" }}>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </i>
                  {event.location}
                </p>
                <p className="mb-2 fw-semibold">
                  <i className="me-2 " style={{ color: "var(--main--color)" }}>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  {event.phone}
                </p>
                <p className="mb-2 fw-semibold">
                  <i className="me-2 " style={{ color: "var(--main--color)" }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  {event.email}
                </p>
                <p className="mb-2 fw-semibold">
                  <i className="me-2 " style={{ color: "var(--main--color)" }}>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  {event.time}
                </p>
                <button
                  className="shop rounded-pill mt-3"
                  aria-label="join now"
                >
                  JOIN NOW
                </button>
              </div>
            </div>
            <div className="gallery">
              <div className="title d-flex justify-content-between">
                <h4 className="fw-bold ">Location Gallery</h4>
                <div className="control ">
                  <i
                    onClick={() => {
                      scrolling();
                    }}
                    className="d-inline-block me-1 text-center cursor-pointer text-white left"
                    style={{
                      width: "40px",
                      background: "var(--second--color)",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </i>
                  <i
                    onClick={() => {
                      scrolling();
                    }}
                    className="d-inline-block text-center cursor-pointer text-white right"
                    style={{
                      width: "40px",
                      background: "var(--second--color)",
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </div>
              </div>
              <div className="slider">
                <LightGallery
                  speed={500}
                  plugins={[
                    lgVideo,
                    lgShare,
                    lgRotate,
                    lgAutoplay,
                    lgThumbnail,
                    lgZoom,
                  ]}
                >
                  {event.gallery.map((E) => {
                    return (
                      <a
                        aria-label={`img ${E}`}
                        key={E}
                        className="col-md text-center g-2 mb-5 me-3 gallery"
                        href={E}
                        data-lg-size="1600-2400"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <img
                          width="640"
                          height="160"
                          alt=""
                          src={E}
                          style={{ width: "350px", height: "200px" }}
                          className="mb-3"
                        ></img>
                      </a>
                    );
                  })}
                </LightGallery>
              </div>
            </div>
          </div>
          <div className="col-lg-3 position-sticky">
            <Category></Category>
          </div>
        </div>
      </div>
    </>
  );
}

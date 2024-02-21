import "../css/Events.css";
import { EventsData } from "../../data/EventsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LandingSection from "../../component/js/LandingSection";
import Category from "../../component/js/Category";
export default function Events() {
  return (
    <>
      <LandingSection title="Events"></LandingSection>
      <div className="container">
        <div className="Events-section row column-gap-5 ">
          <div className="col-lg-8  ">
            {EventsData.map((e) => {
              return (
                <div className="event row mb-5  mt-5 rounded " key={e.id}>
                  <div className="col p-0 align-content-stretch">
                    <div className="img h-100 ">
                      <img
                        src={e.img}
                        alt={e.title}
                        width="640"
                        height="160"
                        className="w-100 h-100"
                      ></img>
                    </div>
                  </div>
                  <div className="col p-4">
                    <h4 className="fw-bold border-0 mb-3">{e.title}</h4>
                    <p style={{ color: "#646464" }} className="fw-semibold">
                      {e.describtionshort}
                    </p>
                    <p className="fw-semibold">
                      <i
                        className="me-2 fs-5"
                        style={{ color: "var(--main--color)" }}
                      >
                        <FontAwesomeIcon icon={faLocationDot} />
                      </i>
                      {e.location}
                    </p>
                    <p className="fw-semibold">
                      <i
                        className="me-2 fs-5"
                        style={{ color: "var(--main--color)" }}
                      >
                        <FontAwesomeIcon icon={faPhone} />
                      </i>
                      {e.phone}
                    </p>
                    <Link to={`${e.id}\\${e.title}`} aria-label="see details">
                      <button
                        className="shop rounded-pill fw-bold"
                        aria-label="see details"
                      >
                        SEE DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-3 position-sticky">
            <Category></Category>
          </div>
        </div>
      </div>
    </>
  );
}

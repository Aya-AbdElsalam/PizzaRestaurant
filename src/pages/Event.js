import Category from "../component/Category";
import "../pages/Events.css";
import { EventsData } from "../data/EventsData";
import LandingSection from "../component/LandingSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Events() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
                    <Link to={`${e.id}\\${e.title}`}>
                      <button className="shop rounded-pill fw-bold">
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

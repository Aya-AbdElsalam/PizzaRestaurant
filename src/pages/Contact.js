import LandingSection from "../component/LandingSection";
import "../pages/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";
export default function Contact() {
  const { pathname } = useLocation();
  //sent message
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_doe3x9g",
        "template_je99i9e",
        form.current,
        "0OAz84xqssxDSzV8U"
      )
      .then(
        (result) => {
          //message has been sent
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: `var(--main--color)`,
            title: `THANKS`,
            text: `your message has been sent`,
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <LandingSection title={`Contact`}></LandingSection>
      <div className="container">
        <div className="contact-methods d-flex flex-wrap justify-content-evenly mb-5 mt-5 ">
          <div className="flex-fill d-flex mb-5 me-3">
            <div className="mb-5">
              <i
                className="fs-1 me-2 p-4"
                style={{ color: "var(--main--color)" }}
              >
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
            </div>
            <div>
              <p className="fw-bolder">165 Belgium, Newyork City</p>
              <p className="fw-bolder">Vehicula Street, 58</p>
            </div>
          </div>
          <div className="flex-fill d-flex mb-5 me-3">
            <div className="mb-5">
              <i
                className="fs-1 me-2 p-4"
                style={{ color: "var(--main--color)" }}
              >
                <FontAwesomeIcon icon={faPhoneVolume} />
              </i>
            </div>
            <div>
              <p className="fw-bolder">+123-9985-6900</p>
              <p className="fw-bolder">+123-9985-6900</p>
            </div>
          </div>
          <div className="flex-fill d-flex mb-5 me-3">
            <div className="mb-5">
              <i
                className="fs-1 me-2 p-4"
                style={{ color: "var(--main--color)" }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
            </div>
            <div>
              <p className="fw-bolder">info@panpie.com</p>
              <p className="fw-bolder">info@panpie.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="Message row">
          <div className="col-lg-6">
            <iframe
              title="map"
              className="w-100"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19868.373358018045!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sar!2sus!4v1702920025068!5m2!1sar!2sus"
              style={{ border: "0", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact col-lg-6 mb-5">
            <h5 style={{ color: "var(--second--color)" }}>SUB TITLE</h5>
            <h2 className="fw-bolder">Send Us Message</h2>
            <p className="mb-5  mt-5">
              Panpie is an ambitious multimedia effort founded when an unkno wn
              printer took a galley of type scrambled.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating mb-3">
                    <input
                      name="from_name"
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Name"
                    />
                    <label htmlFor="floatingInput">Name</label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating mb-3">
                    <input
                      name="from_email"
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  name="subject"
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Subject"
                />
                <label htmlFor="floatingInput">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "200px" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
              <button type="button  " className="btn btn-danger w-25 fw-bolder">
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

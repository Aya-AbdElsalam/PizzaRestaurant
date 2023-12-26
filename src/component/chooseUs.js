import "../component/chooseUs.css";
import pizza from "../images/about04.png";
import i1 from "../images/icon01.png";
import i2 from "../images/icon02.png";
import i3 from "../images/icon03.png";
import i4 from "../images/icon04.png";
export default function ChooseUs() {
  return (
    <div className="chooseUsSection  mt-5 ">
      <div className="container">
        <div className=" row g-2">
          <div className="chooseUsSectionDiv1 pt-5 col-md me-5">
            <p
              style={{ color: "var(--second--color)" }}
              className="fw-bolder mt-5 "
            >
              WHY PEOPLE CHOOSE US
            </p>
            <h1 className="fw-bolder">
              <span style={{ color: "var(--main--color)" }}> PIZZA </span>
              is The Best Pizza Restaurant in Town
            </h1>
            <p>
              Our Pizzahen an unknown printer took a galley type and scrambled
              make type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularisedsheets containing.
            </p>
            <div className=" row g-2 mt-5 why-choose-pizza">
              <div className=" col-md">
                <div className="d-flex mb-3">
                  <i>
                    <img src={i1} alt="" />
                  </i>
                  <div>
                    <h4 className="fw-bold">Quality Chees</h4>
                    <p>
                      Pizza ummy text of the printing typesetting industrorem
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <img src={i2} alt="" />
                  </i>
                  <div>
                    <h4 className="fw-bold">100% Halal Meat</h4>
                    <p>
                      Pizza ummy text of the printing typesetting industrorem
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-md">
                <div className="d-flex mb-3 ">
                  <i>
                    <img src={i3} alt="" />
                  </i>
                  <div>
                    <h4 className="fw-bold">Soft Crust </h4>
                    <p>
                      Pizza ummy text of the printing typesetting industrorem
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <img src={i4} alt="" />
                  </i>
                  <div>
                    <h4 className="fw-bold">Crunchi French Fry</h4>
                    <p>
                      Pizza ummy text of the printing typesetting industrorem
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chooseUsSectionDiv2 col-md">
            <img src={pizza} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

import "../css/History.css";
import historyImg from "../../images/history-img.webp";
import pizzaFired from "../../images/pizzaWoodFired.webp";
import pizzaBurn from "../../images/pizzaBurn.webp";
export default function History() {
  return (
    <div className="history mb-5">
      <div className="container d-flex flex-column ">
        <div className="item1 row mb-3 g-2">
          <div className="history-img col-md">
            <img
              src={historyImg}
              alt=""
              className="rounded-end-circle rounded-top-0 rounded-bottom-0 rounded-left-0 w-100 h-100"
            />
          </div>
          <div className="history-info pt-5 justify-content-center col-md">
            <p style={{ color: "var(--second--color)" }} className="fw-bold ">
              PIZZA HISTORY
            </p>
            <h1>
              Serving Pizzas By The Slice
              <span style={{ color: "var(--main--color)" }}> Since 1987</span>
            </h1>
            <p>
              Our Pizzahen an unknown printer took a galley type and scrambled
              make type specimen book. It has survived not only five centuries,
              but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularisedsheets containing.
            </p>
          </div>
        </div>
        <div className="item2 row  flex-wrap justify-content-center ">
          <div className="img1 mb-3  ">
            <img
              src={pizzaFired}
              alt=""
              className="w-100 h-90  rounded-bottom-circle   "
            />
          </div>
          <div className="img2 ">
            <img src={pizzaBurn} alt="" className="w-100 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

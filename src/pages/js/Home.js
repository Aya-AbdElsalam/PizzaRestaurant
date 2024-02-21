import "../css/home.css";
import excellent from "../../images/excellent.webp";
import delivery from "../../images/delivery.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pizza from "../../images/pizzaTitle.webp";
import sweets from "../../images/sweetsTitle.webp";
import drinks from "../../images/drinksTitle.webp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../rtk/slices/products";
import { categories } from "../../data/FoodData";
import { filterdProductsBestSeller } from "../../rtk/slices/products";
import { useState } from "react";
import Slider from "../../component/js/Slider";
import Elmenator from "../../component/js/elemenator";
import Items from "../../component/js/Items";
import Reviews from "../../component/js/Reviews";
export default function Home() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");
  //call best seller items
  var AllData = useSelector((state) => {
    return state.FoodData.filterdProductsBestSeller;
  });
  return (
    <>
      <Slider></Slider>
      <Elmenator></Elmenator>
      <div className="container  bestSeler">
        <div className="text-center">
          <h3
            style={{ color: "var(--second--color)" }}
            className="fst-italic position-relative"
          >
            BEST SELLER
          </h3>

          <ul className="ms-1 ps-0">
            {categories.map((category) => {
              return (
                <li
                  className="list-group-item mb-4 w-100 border-bottom pb-4"
                  key={category}
                  onClick={() => {
                    dispatch(filterdProductsBestSeller(category));
                    setActive(category);
                  }}
                  style={{
                    display: "inline",
                    background: active === category && "var(--second--color)",
                  }}
                >
                  <button
                    aria-label={category}
                    className="btn fw-bold"
                    style={{
                      color: active === category && "white",
                    }}
                  >
                    {category.toUpperCase()}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <Items AllData={AllData}></Items>
      </div>

      <div className="elmenator-2 position-relative">
        <img
          className="position-absolute z-1"
          alt=""
          src={excellent}
          width="640"
          height="160"
        ></img>
        <div
          className="position-absolute bg-dark  bg-opacity-50 z-0"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
      {/* delivery */}
      <div className="delivery ">
        <div className="container  d-flex align-items-center h-100 lh-lg">
          <div className="info py-5">
            <h2 className="fw-bold">
              Choose what you want, Select a pick up time
            </h2>
            <p>
              Pizza when an unknown printer took a galley typ eand scrambledmake
              a type specimen book bledmake a type snot only.
            </p>
            <Link to={"menu"} aria-label="order now">
              <button
                aria-label="order now"
                type="button"
                className="btn btn-light fw-bold position-relative shop"
              >
                ORDER NOW <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
          <div className="image ms-2">
            <img
              className="w-100"
              src={delivery}
              alt=""
              width="640"
              height="340"
            ></img>
          </div>
        </div>
      </div>
      <Reviews></Reviews>
      <div className="menu mb-5 ">
        <div className="container">
          <div className=" row text-center  justify-content-between">
            <Link
              aria-label="go to pizza menu"
              className="item1 mb-3 col-sm me-1"
              onClick={() => {
                dispatch(filterProducts("pizza"));
              }}
              to={"menu"}
            >
              <img
                src={pizza}
                alt=""
                className="w-100 h-100"
                width="640"
                height="160"
              />
            </Link>
            <Link
              aria-label="go to sweets menu"
              className="item2 mb-3 col-sm me-1"
              onClick={() => {
                dispatch(filterProducts("sweets"));
              }}
              to={"menu"}
            >
              <img
                src={sweets}
                alt=""
                className="w-100 h-100"
                width="640"
                height="160"
              />
            </Link>
            <Link
              aria-label="go to drinks menu"
              className="item3 mb-3 col-sm"
              onClick={() => {
                dispatch(filterProducts("drinks"));
              }}
              to={"menu"}
            >
              <img
                src={drinks}
                alt=""
                className="w-100 h-100"
                width="640"
                height="160"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

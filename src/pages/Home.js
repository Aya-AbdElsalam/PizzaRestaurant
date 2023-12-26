import Slider from "../component/Slider";
import Elmenator from "../component/elemenator";
import "../pages/home.css";
import excellent from "../images/excellent.png";
import delivery from "../images/delivery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Reviews from "../component/Reviews";
import pizza from "../images/pizzaTitle.png";
import sweets from "../images/sweetsTitle.png";
import drinks from "../images/drinksTitle.png";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../rtk/slices/products";
import Items from "../component/Items";
import { categories } from "../data/FoodData";
import { filterdProductsBestSeller } from "../rtk/slices/products";
import { useEffect } from "react";
export default function Home() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  //call best seller items
  var AllData = useSelector((state) => {
    return state.FoodData.filterdProductsBestSeller;
  });
  function ActiveCategory() {
    //active the link that selected
    document.querySelectorAll(".list-group-item").forEach((e) => {
      e.addEventListener("click", (el) => {
        document.querySelectorAll(".list-group-item").forEach((ee) => {
          ee.classList.remove("active");
        });
        el.target.classList.add("active");
      });
    });
  }
  useEffect(() => {
    ActiveCategory();
    //go to top pf page
    window.scrollTo(0, 0);
  }, [pathname]);
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
                <button
                  className="btn fw-bold"
                  key={category}
                  onClick={() => {
                    dispatch(filterdProductsBestSeller(category));
                    ActiveCategory();
                  }}
                >
                  <li
                    className="list-group-item mb-4 w-100 border-bottom pb-4"
                    onClick={() => {
                      ActiveCategory();
                    }}
                  >
                    {category.toUpperCase()}
                  </li>
                </button>
              );
            })}
          </ul>
        </div>
        <Items AllData={AllData}></Items>
      </div>

      <div className="elmenator-2 position-relative">
        <img className="position-absolute z-1" alt="" src={excellent}></img>
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
            <Link to={"menu"}>
              <button
                type="button"
                className="btn btn-light fw-bold position-relative shop"
              >
                ORDER NOW <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
          <div className="image ms-2">
            <img className="w-100" src={delivery} alt=""></img>
          </div>
        </div>
      </div>
      <Reviews></Reviews>
      <div className="menu mb-5 ">
        <div className="container">
          <div className=" row text-center  justify-content-between">
            <Link
              className="item1 mb-3 col-sm me-1"
              onClick={() => {
                dispatch(filterProducts("pizza"));
              }}
              to={"menu"}
            >
              <img src={pizza} alt="" className="w-100 h-100" />
            </Link>
            <Link
              className="item2 mb-3 col-sm me-1"
              onClick={() => {
                dispatch(filterProducts("sweets"));
              }}
              to={"menu"}
            >
              <img src={sweets} alt="" className="w-100 h-100" />
            </Link>
            <Link
              className="item3 mb-3 col-sm"
              onClick={() => {
                dispatch(filterProducts("drinks"));
              }}
              to={"menu"}
            >
              <img src={drinks} alt="" className="w-100 h-100" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import { useDispatch, useSelector } from "react-redux";
import LandingSection from "../component/LandingSection";
import "../pages/Menu.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideNavBar from "../component/SideNavBar";
import {
  filterByPrice,
  sortedFromHighToLow,
  sortedFromLowToHigh,
} from "../rtk/slices/products";
import Items from "../component/Items";
export default function Menu() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  //call the filtered products
  var AllData = useSelector((state) => {
    return state.FoodData.filterdProducts;
  });
  //calll the session state
  let sessionState =
    sessionStorage.getItem("category") ||
    sessionStorage.setItem("category", `"all"`);
  let sessionStateSort = sessionStorage.getItem("Typesort");
  useEffect(
    (sessionState, sessionStateSort) => {
      window.scrollTo(0, 450);
      if (+document.querySelector("input[type='range']").value === 50) {
        dispatch(filterByPrice(50));
      }
      sessionState = sessionStorage.getItem("category");
      if (document.querySelector("input.search").value === "") {
        sessionStorage.removeItem("search");
      }
      //active the selected link
      document.querySelectorAll("a li").forEach((e) => {
        if (
          `"${e.childNodes[1].textContent.toLocaleLowerCase()}"` ===
          sessionState
        ) {
          e.parentNode.classList.add("active");
        } else {
          e.parentNode.classList.remove("active");
        }
      });
      sessionStateSort = sessionStorage.getItem("Typesort");
      //active the selected type of sort "in dropdown"
      document.querySelectorAll(".dropdown-menu li").forEach((e) => {
        if (e.id === sessionStateSort) {
          e.classList.add("active");
        } else {
          e.classList.remove("active");
        }
      });
    },
    [sessionState, pathname, dispatch, sessionStateSort]
  );
  return (
    <>
      <LandingSection title="Menu"></LandingSection>
      <div className="container">
        <div className="row justify-content-between col-sm">
          <SideNavBar></SideNavBar>
          <div className="col-lg-9 menu-items">
            <div className="top row mb-5  pb-4 justify-content-between">
              <h5 className="fw-bolder col-sm">
                Show All <span> {AllData.length} </span> Results
              </h5>
              <div className="dropdown col-sm   ">
                <button
                  className="btn btn-secondary dropdown-toggle border-0 float-end"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  sorting by price
                </button>
                <ul className="dropdown-menu fw-bold">
                  <li id="high">
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        dispatch(sortedFromHighToLow());
                      }}
                    >
                      Hight to low
                    </Link>
                  </li>
                  <li id="low">
                    <Link
                      className="dropdown-item"
                      onClick={() => {
                        dispatch(sortedFromLowToHigh());
                      }}
                    >
                      Low to hight
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <Items AllData={AllData}></Items>
          </div>
        </div>
      </div>
    </>
  );
}

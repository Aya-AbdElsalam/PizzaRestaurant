import { filterByPrice, searchProducts } from "../../rtk/slices/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import "../css/SideNavBar.css";
import Category from "./Category";
export default function SideNavBar() {
  const dispatch = useDispatch();
  return (
    <div className="filter col-lg-3 position-sticky sticky-lg-top">
      <div className="d-flex search border rounded p-3 justify-content-between">
        <input
          style={{ width: "70%" }}
          placeholder="search by name"
          className="rounded search border-0 text-black"
          onInput={(s) => {
            dispatch(searchProducts(s.target.value));
          }}
        ></input>
        <i className="rounded text-center ">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </i>
      </div>

      <Category></Category>

      <h4 className="fw-bolder mt-5 mb-5 pb-4 " htmlFor="customRange3">
        Filter By Price
      </h4>
      <p id="slider" className="range-field">
        <input
          type="range"
          className="w-100 custom-range rounded border-0 "
          min="50"
          max="300"
          step="20"
          id="customRange3"
          onInput={(e) => {
            e.target.parentNode.parentNode.childNodes[5].textContent = `From: ${e.target.value}EGP`;
            dispatch(filterByPrice(e.target.value));
          }}
        ></input>
      </p>
      <span className="fw-bold" style={{ color: "var(--second--color)" }}>
        From: 50EGP
      </span>
    </div>
  );
}

import { NoOfItems, categories } from "../data/FoodData";
import { Link } from "react-router-dom";
import { filterProducts } from "../rtk/slices/products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
export default function Category() {
  const dispatch = useDispatch();
  return (
    <>
      <h4 className="fw-bolder mt-5 mb-5 pb-4 ">Categories</h4>
      <ul className="ms-1 ps-0">
        {categories.map((category) => {
          return (
            <Link
              to={"../menu"}
              className="text-black text-decoration-none"
              key={category}
              onClick={() => {
                dispatch(filterProducts(category));
              }}
            >
              <li className="list-group-item mb-4 w-100 border-bottom pb-4">
                <i className="me-1">
                  <FontAwesomeIcon icon={faArrowRight} />
                </i>
                {category.toUpperCase()}
                <span className="float-end">( {NoOfItems(category)} )</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}

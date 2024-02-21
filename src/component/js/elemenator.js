import "../css/elmenator.css";
import el1 from "../../images/el1.webp";
import el2 from "../../images/el2.webp";
import el3 from "../../images/el3.webp";
import el4 from "../../images/el4.webp";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../rtk/slices/products";
import { Link } from "react-router-dom";
export default function Elmenator() {
  const dispatch = useDispatch();
  return (
    <div className="elementor mt-5 mb-5">
      <div className="container">
        <div className="row ">
          <div className="col-4">
            <Link
              aria-label={`go to pizza menu`}
              className="w-100 h-100"
              onClick={() => dispatch(filterProducts("pizza"))}
              to={"menu"}
            >
              <img
                src={el1}
                alt=""
                className="w-100 h-100 rounded"
                width="160"
                height="160"
              ></img>
            </Link>
          </div>
          <div className="col-8 row">
            <div className="row p-0 m-0">
              <div className="col p-0 me-2">
                <Link
                  aria-label="go to pizza menu"
                  className="w-100 h-100"
                  onClick={() => dispatch(filterProducts("pizza"))}
                  to={"menu"}
                >
                  <img
                    src={el2}
                    alt=""
                    className="w-100 h-100 rounded"
                    width="160"
                    height="160"
                  ></img>
                </Link>
              </div>
              <div className="col p-0 m-0">
                <Link
                  aria-label="go to pizza menu"
                  className="w-100 h-100"
                  onClick={() => dispatch(filterProducts("pizza"))}
                  to={"menu"}
                >
                  <img
                    src={el3}
                    alt=""
                    className="w-100 h-100 rounded"
                    width="160"
                    height="160"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="mt-2 p-0 me-2">
              <Link
                aria-label="go to pizza menu"
                className="w-100 h-100"
                to={"menu"}
                onClick={() => dispatch(filterProducts("pizza"))}
              >
                <img
                  src={el4}
                  alt=""
                  className="w-100 h-100 rounded"
                  width="160"
                  height="160"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

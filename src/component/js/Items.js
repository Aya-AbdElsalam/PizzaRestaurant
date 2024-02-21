import { useState } from "react";
import "../css/ProductsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import SetOptionPox from "./SetOptionPox";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../rtk/slices/cartSlice";
export default function Items(props) {
  var AllData = props.AllData;
  const dispatch = useDispatch();
  const [details, setDetais] = useState([]);
  const [open, setOpen] = useState(false);
  function popUp(p) {
    setDetais([{ ...p }]);
    setOpen(true);
  }
  function ddToCart(product) {
    const a = [];
    var b;
    a.push(product);
    //return item with selected size
    if (a[0].size) {
      b = a.map((e) => {
        return {
          id: e.id,
          categories: e.categories,
          description: e.description,
          img: e.img,
          ingredients: e.ingredients,
          price: parseFloat(
            document
              .getElementById(e.id)
              .textContent.split("EGP")[0]
              .split("Price:")[1]
              .trim()
          ),
          qty: e.qty,
          title: e.title,
          size: document.getElementById(`${product.id}size`).value,
        };
      });
    } else {
      b = a.map((e) => {
        return {
          id: e.id,
          categories: e.categories,
          description: e.description,
          img: e.img,
          ingredients: e.ingredients,
          price: e.price,
          qty: e.qty,
          title: e.title,
        };
      });
    }
    dispatch(AddToCart(b[0]));
  }
  return (
    <>
      {/* card details */}
      <div
        className={`popUpItem  w-100 h-100  justify-content-center align-items-center position-fixed d-none fixed-top fixed-left ${
          open && "open"
        }`}
      >
        <div className="overlay w-100 h-100 position-absolute bg-black opacity-75"></div>
        <div className="card pop  mb-3" style={{ width: "540px" }}>
          <button
            type="button"
            className="btn-close rounded fw-bolder fs-5  p-3 opacity-100  position-sticky sticky-top"
            aria-label="Close"
            onClick={() => {
              setOpen(false);
            }}
          ></button>
          {details.map((d) => {
            return (
              <div key={`${d.id}`} className="row g-0 align-items-center p-3 ">
                <div className="col-md-4">
                  <img
                    width="240"
                    height="140"
                    src={d.img}
                    style={{ width: "100%" }}
                    className="img-fluid rounded-start pop-img"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h4
                      className="card-title pop-title fw-bolder"
                      style={{ color: "var(--second--color)" }}
                    >
                      {d.title}
                    </h4>
                    <SetOptionPox product={d} index={0}></SetOptionPox>
                    <p className="card-text pop-text">{d.description}</p>
                    <button
                      aria-label="add to cart"
                      className="btn mt-2 fw-bold m-0 cart"
                      onClick={() => {
                        ddToCart(d, 0);
                      }}
                    >
                      <i className="fs-4">
                        <FontAwesomeIcon icon={faCartPlus} />
                      </i>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* all items */}
      <div className="productsItem row justify-content-evenly">
        {AllData.map((product, index) => {
          return (
            <div
              className="card col-1 pt-2 mb-4"
              style={{ width: " 19rem" }}
              key={product.id}
            >
              <div className="img position-relative">
                <div className="overlay position-absolute w-100 h-100   d-none align-items-center  justify-content-center">
                  <button
                    aria-label="quik view"
                    className="btn fw--bold text-white fs-5 p-3"
                    onClick={() => {
                      popUp(product);
                    }}
                  >
                    Quik View
                  </button>
                </div>
                <img
                  src={product.img}
                  className="card-img-top w-100"
                  alt="..."
                  style={{ height: "262px" }}
                  width="140"
                  height="262"
                />
              </div>
              <div className="card-body d-flex flex-wrap align-content-between">
                <div className="d-flex justify-content-between w-100">
                  <h1
                    className="card-title pb-3 d-inline-block w-100"
                    style={{ fontSize: "20px" }}
                  >
                    {product.title}
                  </h1>
                  <button
                    aria-label="add to cart"
                    className="btn p-0 m-0"
                    onClick={() => {
                      ddToCart(product, index);
                    }}
                  >
                    <i className="p-1 text-white fs-4">
                      <FontAwesomeIcon icon={faCartPlus} />
                    </i>
                  </button>
                </div>
                <p className="card-text">{product.ingredients}</p>
                <SetOptionPox product={product} index={index}></SetOptionPox>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

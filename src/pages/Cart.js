import "../pages/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import LandingSection from "../component/LandingSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { removeFromCart, updateQty } from "../rtk/slices/cartSlice";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Cart() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  //Call  items of cart
  var CartItems = useSelector((state) => {
    return state.Cart.cartItems;
  });
  //calculate total price
  const total = CartItems.reduce((acc, product) => {
    acc += product.price * product.qty;
    return acc;
  }, 0);
  useEffect(() => {
    //go to top page
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <LandingSection title="Cart"></LandingSection>
      <div className="container">
        <div className="cartSection row mb-5 gap-5">
          <h2 style={{ color: "var(--main--color)" }}>ITEMS</h2>
          <div className="col-md rounded  p-5 ItemsDetails">
            {/* show the items in the cart  */}
            {CartItems.length > 0 &&
              CartItems.map((p) => {
                return (
                  <div className="item row border-bottom pb-3 pt-3" key={p.id}>
                    <div className="img col">
                      <img alt="" src={p.img} style={{ width: "100%" }}></img>
                    </div>
                    <div className="info col">
                      <h5 style={{ color: "var(--second--color)" }}>
                        {p.title}
                      </h5>
                      {p.size && <p className="fw-bold">SIZE: {p.size}</p>}
                      <p className="fw-bold">PRICE: {p.price}EGP</p>
                      <div className="row">
                        <span className="col-1 w-auto">QTY:</span>
                        <input
                          type="number"
                          onInput={(i) => {
                            if (i.target.value > 0) {
                              dispatch(updateQty(p));
                            } else {
                              dispatch(removeFromCart(p));
                            }
                          }}
                          onChange={(i) => {
                            if (i.target.value > 0) {
                              dispatch(updateQty(p));
                            } else {
                              dispatch(removeFromCart(p));
                            }
                          }}
                          id={`${p.id}${p.size}`}
                          className="d-inline-block col qty"
                          value={p.qty}
                        ></input>
                      </div>
                    </div>
                    <div className="col-1 ">
                      <i
                        className="fs-3 trash cursor-pointer"
                        onClick={() => {
                          dispatch(removeFromCart(p));
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </i>
                    </div>
                  </div>
                );
              })}
            {/* show cart empity when the cart is empity */}
            {CartItems.length === 0 && (
              <>
                <h3
                  className="fst-italic"
                  style={{ color: "var(--second--color)" }}
                >
                  Cart is Empity
                </h3>
                <Link
                  to="../menu"
                  className="text-dark fw-bold text-decoration-none"
                >
                  Go to shopping
                </Link>
              </>
            )}
          </div>
          <div className="col-md ">
            <div
              className="rounded p-3  summary"
              style={{ background: "antiquewhite" }}
            >
              <h2 style={{ color: "var(--main--color)" }}>SUMMARY</h2>
              <p className="fw-bold">
                SubTotal: <span className="fw-medium"> {total}EGP</span>
              </p>
              <p className="fw-bold">
                Shipping & Handling: <span className="fw-medium">20EGP</span>
              </p>
              <hr></hr>
              <p className="fw-bold">Balance: {total + 20}EGP</p>
            </div>
            <button className="btn fw-bold fs-4 mt-3 text-white check">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

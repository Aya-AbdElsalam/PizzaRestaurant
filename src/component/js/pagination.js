import React, { useEffect, useState } from "react";
import "../css/pagination.css";
export default function Pagination(props) {
  const noOfPages = Math.ceil(props.getLength() / props.limit);
  let a = [];
  for (let i = 1; i <= noOfPages; i++) {
    a.push(i);
  }
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  useEffect(() => {
    if (+props.pages === 1) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
    if (+props.pages === noOfPages) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
  }, [noOfPages, props.pages]);
  return (
    <div className="container mt-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <span
              className={`page-link previous ${prevDisabled && "disabled"}`}
              onClick={(e) => {
                props.onPageChange(props.pages - 1);
                localStorage.setItem("pages", props.pages - 1);
              }}
            >
              Previous
            </span>
          </li>
          {a.map((i) => {
            if (+i === +props.pages) {
              return (
                <li className="page-item active" key={props.pages}>
                  <span
                    className="page-link "
                    href="#"
                    onClick={() => {
                      localStorage.setItem("pages", i);
                      props.onPageChange(i);
                    }}
                  >
                    {i}
                  </span>
                </li>
              );
            } else {
              return (
                <li className="page-item " key={i}>
                  <span
                    className="page-link "
                    href="#"
                    onClick={() => {
                      localStorage.setItem("pages", i);
                      props.onPageChange(i);
                    }}
                  >
                    {i}
                  </span>
                </li>
              );
            }
          })}
          <li className="page-item ">
            <span
              className={`page-link next ${nextDisabled && "disabled"}`}
              onClick={() => {
                props.onPageChange(parseInt(props.pages) + 1);
                localStorage.setItem("pages", parseInt(props.pages) + 1);
              }}
            >
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

import { useEffect, useState } from "react";
import GalleryDom from "../component/GalleryDom";
import LandingSection from "../component/LandingSection";
import "../pages/Gallery.css";
import { GalleryData, getLength } from "../data/GalleryData";
import Pagination from "../component/pagination";
import "../component/pagination.css";
import { useLocation } from "react-router-dom";
export default function Gallery() {
  const { pathname } = useLocation();
  const [pages, setPages] = useState(1);
  const [limit] = useState(8);
  const noOfPages = Math.ceil(getLength() / limit);
  useEffect(() => {
    if (localStorage.getItem("pages")) {
      setPages(localStorage.getItem("pages"));
    }
    //disable the prev btn when open the first page
    if (+pages === 1) {
      document.querySelector(".previous").classList.add("disabled");
    } else {
      document.querySelector(".previous").classList.remove("disabled");
    }
    //disable the next btn when open the last page
    if (+pages === noOfPages) {
      document.querySelector(".next").classList.add("disabled");
    } else {
      document.querySelector(".next").classList.remove("disabled");
    }
    //go to top page
    window.scrollTo(0, 0);
  }, [noOfPages, pages, pathname]);
  function handlePageChange(value) {
    setPages(value);
  }

  return (
    <>
      <LandingSection title="Gallery"></LandingSection>
      <GalleryDom data={GalleryData(pages, limit)}></GalleryDom>
      <Pagination
        onPageChange={handlePageChange}
        pages={pages}
        limit={limit}
        getLength={getLength}
      ></Pagination>
    </>
  );
}

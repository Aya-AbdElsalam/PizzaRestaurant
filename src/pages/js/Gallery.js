import { useEffect, useState } from "react";
import "../css/Gallery.css";
import { GalleryData, getLength } from "../../data/GalleryData";
import "../../component/css/pagination.css";
import LandingSection from "../../component/js/LandingSection";
import Pagination from "../../component/js/pagination";
import GalleryDom from "../../component/js/GalleryDom";
export default function Gallery() {
  const [pages, setPages] = useState(1);
  const [limit] = useState(8);
  const noOfPages = Math.ceil(getLength() / limit);
  useEffect(() => {
    if (localStorage.getItem("pages")) {
      setPages(localStorage.getItem("pages"));
    }
  }, [noOfPages, pages]);
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

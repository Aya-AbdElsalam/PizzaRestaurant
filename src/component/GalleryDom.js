import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";
export default function GalleryDom(props) {
  return (
    <div className="container text-center ">
      <LightGallery
        speed={500}
        plugins={[lgVideo, lgShare, lgRotate, lgAutoplay, lgThumbnail, lgZoom]}
      >
        {props.data.map((E) => {
          return (
            <a
              key={E}
              className="col-md text-center g-2 mb-5 me-3 gallery"
              href={E}
              data-lg-size="1600-2400"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img
                alt=""
                src={E}
                style={{ width: "350px", height: "200px" }}
                className="mb-3"
              ></img>
            </a>
          );
        })}
      </LightGallery>
    </div>
  );
}

import "../component/Preloader.css";
import SvgComponent from "./SVG";
// import SvgComponent2 from "../component/SVG2";
export default function Preloader() {
  return (
    <>
      <div
        className="preloader  w-100 position-fixed bg-black  fixed-top justify-content-center
    align-items-center"
      >
        <div className="svg">
          <SvgComponent></SvgComponent>
        </div>
      </div>
    </>
  );
}

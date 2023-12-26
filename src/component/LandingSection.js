import "../component/LandingSection.css";
export default function LandingSection(props) {
  return (
    <div className="section mb-5">
      <div className="container landing-section d-flex justify-content-center h-100 align-items-center ">
        <h1 className="fw-bold fs-1">{props.title}</h1>
      </div>
    </div>
  );
}

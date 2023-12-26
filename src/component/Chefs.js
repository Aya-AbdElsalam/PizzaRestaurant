import "../component/Chefs.css";
import ChefDom from "./ChefDom";
import { data_chefs } from "../data/dataChefs";
let data = data_chefs.slice(0, 4);
export default function Chefs() {
  return (
    <div className="expChefsSection">
      <div className="container text-center ">
        <p style={{ color: "var(--second--color)" }} className="fw-bolder">
          EXPERIENCED CHEFS
        </p>
        <h1 className="fw-bolder mb-5">
          Let’s Introduce Our Experte Master Chefs
        </h1>
        <div className="d-flex overflow-hidden text-white chefs-team flex-wrap">
          {data.map((chef) => {
            return <ChefDom chef={chef} key={`${chef.id}`}></ChefDom>;
          })}
        </div>
      </div>
    </div>
  );
}

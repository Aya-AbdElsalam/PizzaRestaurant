import "../css/ourTeam.css";
import { data_chefs } from "../../data/dataChefs";
import LandingSection from "../../component/js/LandingSection";
import ChefDom from "../../component/js/ChefDom";
export default function OurTeam() {
  return (
    <>
      <LandingSection title={`Our team `}></LandingSection>
      <div className="container">
        <div className="d-flex overflow-hidden text-white chefs-team flex-wrap text-center mb-5">
          {data_chefs.map((chef) => {
            return <ChefDom chef={chef} key={chef.id}></ChefDom>;
          })}
        </div>
      </div>
    </>
  );
}

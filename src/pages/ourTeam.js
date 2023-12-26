import LandingSection from "../component/LandingSection";
import "../pages/ourTeam.css";
import ChefDom from "../component/ChefDom";
import { data_chefs } from "../data/dataChefs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function OurTeam() {
  const { pathname } = useLocation();
  useEffect(() => {
    //scroll to the top page
    window.scrollTo(0, 0);
  }, [pathname]);
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

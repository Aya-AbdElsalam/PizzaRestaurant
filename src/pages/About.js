import LandingSection from "../component/LandingSection";
import { useEffect } from "react";
import History from "../component/History";
import ChooseUs from "../component/chooseUs";
import Clients from "../component/Clients";
import Chefs from "../component/Chefs";
import Counter from "../component/Counter";
import Reviews from "../component/Reviews";
import GetDelivery from "../component/GetDelivery";
import { useLocation } from "react-router-dom";

export default function About() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Number Counting Animation for client section
    Counter(
      document.querySelectorAll(".clients-section h1"),
      document.querySelector(".clients-section")
    );
    // go to top page when open the page
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <LandingSection title="About Us"></LandingSection>
      <History></History>
      <ChooseUs></ChooseUs>
      <Clients></Clients>
      <Chefs></Chefs>
      <Reviews></Reviews>
      <GetDelivery></GetDelivery>
    </>
  );
}

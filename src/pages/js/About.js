import LandingSection from "../../component/js/LandingSection";
import ChooseUs from "../../component/js/chooseUs";
import Clients from "../../component/js/Clients";
import Chefs from "../../component/js/Chefs";
import Reviews from "../../component/js/Reviews";
import GetDelivery from "../../component/js/GetDelivery";
import History from "../../component/js/History";

export default function About() {
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

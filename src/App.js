import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/js/Navbar";
import NavbarBottom from "./component/js/NavbarBottom";
import Home from "./pages/js/Home";
import About from "./pages/js/About";
import TeamInfo from "./pages/js/teamInfo";
import OurTeam from "./pages/js/ourTeam";
import Contact from "./pages/js/Contact";
import Gallery from "./pages/js/Gallery";
import Menu from "./pages/js/Menu";
import Cart from "./pages/js/Cart";
import EventDetails from "./pages/js/EventDetails";
import Footer from "./component/js/Footer";
import Events from "./pages/js/Event";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Navbar></Navbar>
      <NavbarBottom></NavbarBottom>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="aboutUs" element={<About></About>}></Route>
        <Route path="team/:id/:name" element={<TeamInfo></TeamInfo>}></Route>
        <Route path="team" element={<OurTeam></OurTeam>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="gallery" element={<Gallery></Gallery>}></Route>
        <Route path="menu" element={<Menu></Menu>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
        <Route path="events" element={<Events></Events>}></Route>
        <Route
          path="events/:id/:title"
          element={<EventDetails></EventDetails>}
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import NavbarBottom from "./component/NavbarBottom";
import Home from "./pages/Home";
import About from "./pages/About";
import TeamInfo from "./pages/teamInfo";
import OurTeam from "./pages/ourTeam";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Event from "./pages/Event";
import Footer from "./component/Footer";
import EventDetails from "./pages/EventDetails";
function App() {
  const { pathname } = useLocation();
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
        <Route path="events" element={<Event></Event>}></Route>
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
